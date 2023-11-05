<?php

namespace App\Http\Controllers;

use App\DataTables\CategoryDataTable;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use RealRashid\SweetAlert\Facades\Alert;

class CategoryController extends Controller
{
    public function getAllCategories()
    {
        $categories = Category::all();
        return response()->json(['categories' => $categories]);
    }

    public function getCategory($id)
    {
        $category = Category::findOrFail($id);
        return response()->json($category);
    }

    public function index(CategoryDataTable $dataTables)
    {
        return $dataTables->render('AdminDashboard.Pages.category.index');
    }

    public function create()
    {
        return view('AdminDashboard.Pages.category.create');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return redirect()->route('categories.create')
                ->withErrors($validator)
                ->withInput();
        }

        $relativeImagePath = null;
        if ($request->hasFile('image')) {
            $newImageName1 = uniqid() . '-' . $request->input('name') . '.' . $request->file('image')->extension();
            $relativeImagePath = $newImageName1; // Image saved directly to the root of the "public" folder
            $request->file('image')->move(public_path(), $newImageName1); // Save to the root of the "public" folder
        }


        // Create a new category
        Category::create([
            'name' => $request->input('name'),
            'image' => $relativeImagePath,
            'description' => $request->input('description'),
        ]);

        Alert::success('success', 'Category Added Successfully');

        return redirect()->route('categories.index');
    }

    public function show(Category $category)
    {
        return view('AdminDashboard.Pages.category.index', ['category' => $category]);
    }

    public function edit(Category $category)
    {
        return view('AdminDashboard.Pages.category.edit', ['category' => $category]);
    }

    public function update(Request $request, Category $category)

    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'image' => 'image|mimes:jpeg,png,jpg,gif',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return redirect()->route('categories.edit', ['category' => $category])
                ->withErrors($validator)
                ->withInput();
        }

        $data = $request->except(['_token', '_method']);

        $relativeImagePath = null;
        if ($request->hasFile('image')) {
            $newImageName1 = uniqid() . '-' . $request->input('name') . '.' . $request->file('image')->extension();
            $relativeImagePath = $newImageName1; // Image saved directly to the root of the "public" folder
            $request->file('image')->move(public_path(), $newImageName1); // Save to the root of the "public" folder
            $data['image'] = $relativeImagePath;
        }

        Category::where('id', $category->id)->update($data);

        Alert::success('success', 'Category Updated Successfully');

        return redirect()->route('categories.index');
    }


    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return response(['status' => 'success', 'message' => 'Deleted Successfully!']);
    }


    // public function destroy(Category $category)
    // {
    //     // Delete the category image
    //     if (Storage::exists($category->image)) {
    //         Storage::delete($category->image);
    //     }

    //     // Delete the category record from the database
    //     $category->delete();

    //     return redirect()->route('categories.index')
    //         ->with('success', 'Category deleted successfully');
    // }
}
