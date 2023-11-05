@extends('AdminDashboard.Layout.master')
@section('title', 'Add Item')
@section('content')

    <!-- partial -->
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-md-12 ">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Add Item</h4>
                            <form class="forms-sample" method="POST" action="{{ route('items.store') }}"
                                enctype="multipart/form-data">
                                @csrf
                                @method('post')
                                <div class="form-group">
                                    <label for="name">Item Name</label>
                                    <input type="text" class="form-control" id="name" name="name"
                                        placeholder="Item Name">
                                </div>

                                <div class="form-group">
                                    <label for="description">Item Description</label>
                                    <textarea class="form-control" id="description" name="description" placeholder="Item Description"></textarea>
                                </div>

                                <div class="form-group">
                                    <label for="price">Price</label>
                                    <input type="text" class="form-control" id="price" name="price"
                                        placeholder="Price">
                                </div>


                                <div class="form-group">
                                    <label for="image">Item Image</label>
                                    <input type="file" class="form-control-file" id="image" name="image">
                                </div>

                                <div class="form-group">
                                    <label for="category_id">Category:</label>
                                    <select name="category_id" id="category_id" class="form-control">
                                        @foreach ($categories as $category)
                                            <option value="{{ $category->id }}">{{ $category->name }}</option>
                                        @endforeach
                                    </select>
                                </div>

                                <button type="submit" class="btn btn-primary mr-2">Submit</button>
                                <a href="{{ route('items.index') }}" class="btn btn-dark">Cancel</a>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
