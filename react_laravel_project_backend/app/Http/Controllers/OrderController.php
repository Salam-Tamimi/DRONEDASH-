<?php

namespace App\Http\Controllers;

use App\DataTables\OrderDataTable; // Import the DataTable class
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use RealRashid\SweetAlert\Facades\Alert;
use Illuminate\Http\JsonResponse;

class OrderController extends Controller
{
    //This function to return the last user order as response to API
    public function getTheLastUserOrder($user_id): JsonResponse
    {
        $userOrder = Order::where('user_id', $user_id)
            ->latest('date')
            ->with('item')
            ->with('item.category')
            ->first();

        return response()->json($userOrder);
    }


    public function index(OrderDataTable $dataTables)
    {
        return $dataTables->render('AdminDashboard.Pages.order.index');
    }

    public function create()
    {
        return view('AdminDashboard.Pages.order.create');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'date' => 'required|date',
            'time' => 'required',
            'location' => 'required|string',
            'notes' => 'nullable|string',
            'phone' => 'nullable|number',
            'totalPrice' => 'required|numeric',
            'editing' => 'required|boolean',
        ]);

        if ($validator->fails()) {
            return redirect()->route('order.create')
                ->withErrors($validator)
                ->withInput();
        }

        // Create a new order
        Order::create([
            'date' => $request->input('date'),
            'time' => $request->input('time'),
            'location' => $request->input('location'),
            'notes' => $request->input('notes'),
            'totalPrice' => $request->input('totalPrice'),
            'editing' => $request->input('editing'),
        ]);

        Alert::success('success', 'Order Added Successfully');

        return redirect()->route('orders.index');
    }

    public function storee(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required',
            'item_id' => 'required',
            'date' => 'required|date',
            'time' => 'required|date_format:H:i',
            'location' => 'required|string|max:255',
            'phone' => 'nullable',
            'notes' => 'nullable|string',
            'totalPrice' => 'required|numeric|min:0',
            'editing' => 'required|boolean',
        ]);
        $order = Order::create($validatedData);

        return response()->json(['message' => 'Order created successfully', 'order' => $order], 201);
    }
    public function show(Order $order)
    {
        return view('AdminDashboard.Pages.order.index', ['order' => $order]);
    }

    public function edit(Order $order)
    {
        return view('AdminDashboard.Pages.order.edit', ['order' => $order]);
    }

    public function update(Request $request, Order $order)
    {
        $validator = Validator::make($request->all(), [
            'date' => 'required|date',
            'time' => 'required',
            'location' => 'required|string',
            'notes' => 'nullable|string',
            'totalPrice' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return redirect()->route('orders.edit', ['order' => $order])
                ->withErrors($validator)
                ->withInput();
        }

        $order->update([
            'date' => $request->input('date'),
            'time' => $request->input('time'),
            'location' => $request->input('location'),
            'notes' => $request->input('notes'),
            'totalPrice' => $request->input('totalPrice'),
        ]);

        Alert::success('success', 'Order Updated Successfully');

        return redirect()->route('orders.index');
    }

    public function destroy(Order $order)
    {
        $order->delete();

        return response(['status' => 'success', 'message' => 'Deleted Successfully!']);
    }
}
