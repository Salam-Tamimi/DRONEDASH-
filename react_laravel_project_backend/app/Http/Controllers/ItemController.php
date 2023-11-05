<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use App\DataTables\ItemDataTable;
use App\Models\Category;
use RealRashid\SweetAlert\Facades\Alert;
use Illuminate\Http\JsonResponse;



class ItemController extends Controller
{
    // Return all items as a response to API
    public function getAllItems($id)
    {
        // $items = Item::all();
        // $category = Category::where("category_id", $id)->first();
        $items = Item::where('category_id', $id)->get();
        return response()->json($items);
    }

    public function getSingleItem($id): JsonResponse
    {
        $item = Item::find($id);

        if (!$item) {
            return response()->json(['error' => 'Item not found'], 404);
        }

        $response = [
            'item' => $item,
            'category' => $item->category,
            'order' => $item->order,
        ];

        return response()->json($response);
    }


    public function index(ItemDataTable $dataTables)
    {
        return $dataTables->render('AdminDashboard.Pages.item.index');
    }

    public function create()
    {
        $categories = Category::all();
        return view('AdminDashboard.Pages.item.create', compact('categories'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'image' => 'required',
            'description' => 'required',
            'category_id' => 'required',
            'price' => 'required|numeric',
        ]);

        $relativeImagePath = null;
        if ($request->hasFile('image')) {
            $newImageName1 = uniqid() . '-' . $request->input('name') . '.' . $request->file('image')->extension();
            $relativeImagePath = $newImageName1; // Image saved directly to the root of the "public" folder
            $request->file('image')->move(public_path(), $newImageName1); // Save to the root of the "public" folder
        }

        Item::create([
            'name' => $request->input('name'),
            'image' => $relativeImagePath,
            'description' => $request->input('description'),
            'category_id' => $request->input('category_id'),
            'price' => $request->input('price'),
        ]);

        Alert::success('success', 'Item Added Successfully');

        return redirect()->route('items.index');
    }

    public function show(Item $item)
    {
        //return view('AdminDashboard.Pages.item.show', compact('item'));
    }

    public function edit(Item $item)
    {
        $categories = Category::all();
        return view('AdminDashboard.Pages.item.edit', compact('item', 'categories'));
    }

    public function update(Request $request, Item $item)
    {
        $request->validate([
            'name' => 'required',
            'image' => 'required',
            'description' => 'required',
            'category_id' => 'required',
            'price' => 'required|numeric',
        ]);

        $data = $request->except(['_token', '_method']);

        $relativeImagePath = null;
        if ($request->hasFile('image')) {
            $newImageName1 = uniqid() . '-' . $request->input('name') . '.' . $request->file('image')->extension();
            $relativeImagePath = $newImageName1; // Image saved directly to the root of the "public" folder
            $request->file('image')->move(public_path(), $newImageName1); // Save to the root of the "public" folder
            $data['image'] = $relativeImagePath;
        }

        Item::where('id', $item->id)->update($data);

        Alert::success('success', 'Item Updated Successfully');

        return redirect()->route('items.index');
    }

    public function destroy($id)
    {
        $item = Item::findOrFail($id);
        $item->delete();

        return response(['status' => 'success', 'message' => 'Deleted Successfully!']);
    }

    // public function destroy(Item $item)
    // {
    //     $item->delete();

    //     return redirect()->route('items.index')
    //         ->with('success', 'Item deleted successfully');
    // }
}
