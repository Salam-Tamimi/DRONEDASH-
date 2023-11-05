@extends('AdminDashboard.Layout.master')
@section('title', 'Edit Category')
@section('content')

    <!-- partial -->
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-md-12 ">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Edit Category</h4>
                            <form class="forms-sample" method="POST"
                                action="{{ route('categories.update', ['category' => $category->id]) }}"
                                enctype="multipart/form-data">
                                @csrf
                                @method('PATCH') <!-- Use the PATCH method for updating -->
                                <div class="form-group">
                                    <label for="name">Category Name</label>
                                    <input type="text" class="form-control" id="name" name="name"
                                        value="{{ $category->name }}" placeholder="Category Name">
                                </div>
                                <div class="form-group">
                                    <label for="description">Category Description</label>
                                    <textarea class="form-control" id="description" name="description" placeholder="Category Description">{{ $category->description }}</textarea>
                                </div>
                                <div class="form-group">
                                    <label for="image">Category Image</label>
                                    <input type="file" class="form-control-file" id="image" name="image">
                                </div>
                                @if ($category->image)
                                    <div class="form-group">
                                        <label>Current Image:</label>
                                        <img src="{{ asset($category->image) }}" alt="Category Image" width="150">
                                    </div>
                                @endif

                                <button type="submit" class="btn btn-primary mr-2">Update</button>
                                <a href="{{ route('categories.index') }}" class="btn btn-dark">Cancel</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
