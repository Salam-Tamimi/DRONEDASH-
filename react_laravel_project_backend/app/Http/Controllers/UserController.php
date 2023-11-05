<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use App\DataTables\UserDataTable;
use App\Models\User;
use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;


class UserController extends Controller
{
    //This function to return user info as response to API
    public function getUserInfo($user_id)
    {
        $userInfo = User::findOrFail($user_id);
        return response()->json($userInfo);
    }


    public function getAllUsers()
    {
        $users = User::all();
        return response()->json($users);
    }


    //This function to add update user info that come from react page as response to API 
    public function updateUserInfo(Request $request, $id)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'image' => 'required',
                'email' => 'required|email',
                'phone' => 'required|numeric',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        User::where('id', $id)->update([
            'name' => $request->name,
            'image' => $request->image,
            'email' => $request->email,
            'phone' => $request->phone,
        ]);

        return response()->json(['message' => 'User Information Updated Successfully'], 201);
    }


    //This function to add update user image that come from react page as response to API 
    public function updateUserImage(Request $request, $id)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $user = User::findOrFail($id);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        // $data = $request->except(['_token', '_method']);

        // $relativeImagePath = null;
        // if ($request->hasFile('image')) {
        //     $newImageName = uniqid() . '-' . $request->input('name') . '.' . $request->file('image')->extension();
        //     $relativeImagePath = 'assets/images/' . $newImageName;
        //     $request->file('image')->move(public_path('assets/images'), $newImageName);
        //     $data['image'] = $relativeImagePath;
        // }

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path(), $imageName);
            $user->image = $imageName;
            $user->save();
        }

        return response()->json(['message' => 'User Image Updated Successfully'], 201);
    }


    //This function to add update password info that come from react page as response to API 
    public function updateUserPass(Request $request, $id)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'password' => [
                    'required',
                    'min:8',
                    'regex:/^(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/',
                ],
            ]
        );

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        User::where('id', $id)->update([
            'password' => $request->password,
        ]);

        return response()->json(['message' => 'Password Updated Successfully'], 201);
    }


    public function index(UserDataTable $dataTables)
    {
        return $dataTables->render('AdminDashboard.Pages.user.index');
    }


    public function create()
    {
        return view('AdminDashboard.Pages.user.create');
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'image' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'password' => 'required',
        ]);

        $relativeImagePath = null;
        if ($request->hasFile('image')) {
            $newImageName1 = uniqid() . '-' . $request->input('name') . '.' . $request->file('image')->extension();
            $relativeImagePath = $newImageName1; // Image saved directly to the root of the "public" folder
            $request->file('image')->move(public_path(), $newImageName1); // Save to the root of the "public" folder
        }

        User::create([
            'name' => $request->input('name'),
            'image' => $relativeImagePath,
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'password' => $request->input('password'),
        ]);

        Alert::success('success', 'User Added Successfully');

        return redirect()->route('user.index');
    }


    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response(['status' => 'success', 'message' => 'Deleted Successfully!']);
    }
}
