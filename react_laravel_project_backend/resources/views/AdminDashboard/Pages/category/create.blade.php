@extends('AdminDashboard.Layout.master')
@section('title', 'Add Category')
@section('content')

    <!-- partial -->
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-md-12 ">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Add Category</h4>
                            <form class="forms-sample" method="POST" action="{{ route('categories.store') }}"
                                enctype="multipart/form-data">
                                @csrf <!-- Add a CSRF token for security -->
                                @method('post')
                                <div class="form-group">
                                    <label for="name">Category Name</label>
                                    <input type="text" class="form-control" id="name" name="name"
                                        placeholder="Category Name">
                                </div>
                                <div class="form-group">
                                    <label for="description">Category Description</label>
                                    <textarea class="form-control" id="description" name="description" placeholder="Category Description"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="image">Category Image</label>
                                    <input type="file" class="form-control-file" id="image" name="image">
                                </div>


                                <button type="submit" class="btn btn-primary mr-2">Submit</button>
                                <a href="{{ route('categories.index') }}" class="btn btn-dark">Cancel</a>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
