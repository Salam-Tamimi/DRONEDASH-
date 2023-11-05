@extends('AdminDashboard.Layout.master')
@section('title', 'Add Order')
@section('content')

    <!-- partial -->
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Add Order</h4>
                            <form class="forms-sample" method="POST" action="{{ route('order.store') }}">
                                @csrf
                                <div class="form-group">
                                    <label for="date">Date</label>
                                    <input type="date" class="form-control" id="date" name="date">
                                </div>

                                <div class="form-group">
                                    <label for="time">Time</label>
                                    <input type="time" class="form-control" id="time" name="time">
                                </div>

                                <div class="form-group">
                                    <label for="location">Location</label>
                                    <input type="text" class="form-control" id="location" name="location" placeholder="Location">
                                </div>

                                <div class="form-group">
                                    <label for="notes">Notes</label>
                                    <textarea class="form-control" id="notes" name="notes" placeholder="Notes"></textarea>
                                </div>

                                <div class="form-group">
                                    <label for="totalPrice">Total Price</label>
                                    <input type="text" class="form-control" id="totalPrice" name="totalPrice" placeholder="Total Price">
                                </div>

                                <!-- You can add more fields if needed -->

                                <button type="submit" class="btn btn-primary mr-2">Submit</button>
                                <a href="{{ route('order.index') }}" class="btn btn-dark">Cancel</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection