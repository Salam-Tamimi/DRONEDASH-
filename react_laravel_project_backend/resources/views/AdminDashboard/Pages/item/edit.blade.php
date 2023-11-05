@extends('AdminDashboard.Layout.master')
@section('title', 'Edit Item')
@section('content')

    <!-- partial -->
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-md-12 ">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Edit Item</h4>
                            <form class="forms-sample" method="POST"
                                action="{{ route('items.update', ['item' => $item->id]) }}" enctype="multipart/form-data">
                                @csrf
                                @method('PUT') <!-- Use the PATCH method for updating -->
                                <div class="form-group">
                                    <label for="name">Item Name</label>
                                    <input type="text" class="form-control" id="name" name="name"
                                        value="{{ $item->name }}" placeholder="item Name">
                                </div>

                                <div class="form-group">
                                    <label for="description">Item Description</label>
                                    <textarea class="form-control" id="description" name="description" placeholder="Item Description">{{ $item->description }}</textarea>
                                </div>

                                <div class="form-group">
                                    <label for="price">Price</label>
                                    <input type="text" class="form-control" id="price" name="price"
                                        placeholder="Price" value="{{ $item->price }}">
                                </div>




                                <div class="form-group">
                                    <label for="category_id">Category:</label>
                                    <select name="category_id" id="category_id" class="form-control">
                                        @foreach ($categories as $category)
                                            <option value="{{ $category->id }}">{{ $category->name }}</option>
                                        @endforeach
                                    </select>
                                </div>


                                <div class="form-group">
                                    <label for="image">Item Image</label>
                                    <input type="file" class="form-control-file" id="image" name="image">
                                </div>
                                @if ($item->image)
                                    <div class="form-group">
                                        <label>Current Image:</label>
                                        <img src="{{ asset($item->image) }}" alt="Item Image" width="150">
                                    </div>
                                @endif



                                <button type="submit" class="btn btn-primary mr-2">Update</button>
                                <a href="{{ route('items.index') }}" class="btn btn-dark">Cancel</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
