@extends('AdminDashboard.Layout.master')
@section('title', 'Add User')
@section('content')

    <!-- partial -->
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-md-12 ">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Add User</h4>
                            <form class="forms-sample" method="POST" action="{{ route('user.store') }}"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="form-group">
                                    <label for="exampleInputUsername1">Name</label>
                                    <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Name"
                                        name="name">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" name="email" class="form-control" id="exampleInputEmail1"
                                        placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"
                                        placeholder="Password" name="password">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputConfirmPassword1">Phone</label>
                                    <input type="text" class="form-control" id="exampleInputConfirmPassword1"
                                        placeholder="Phone" name="phone">
                                </div>
                                <div class="form-group">
                                    <label for="image">User Image</label>
                                    <input type="file" class="form-control-file" id="image" name="image">
                                </div>
                                <button type="submit" class="btn btn-primary mr-2">Submit</button>
                                <button class="btn btn-dark">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
