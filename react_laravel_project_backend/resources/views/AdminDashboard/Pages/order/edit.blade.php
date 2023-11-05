@extends('AdminDashboard.Layout.master')
@section('title', 'Edit Order')
@section('content')

    <!-- partial -->
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-md-12 ">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Edit Order</h4>
                            <form class="forms-sample" method="POST"
                                action="{{ route('orders.update', ['order' => $order->id]) }}">
                                @csrf
                                @method('PUT') <!-- Use the PUT method for updating -->
                                <div class="form-group">
                                    <label for="date">Date</label>
                                    <input type="date" class="form-control" id="date" name="date" value="{{ $order->date }}">
                                </div>

                                <div class="form-group">
                                    <label for="time">Time</label>
                                    <input type="time" class="form-control" id="time" name="time" value="{{ $order->time }}">
                                </div>

                                <div class="form-group">
                                    <label for="location">Location</label>
                                    <input type="text" class="form-control" id="location" name="location"
                                        value="{{ $order->location }}" placeholder="Location">
                                </div>

                                <div class="form-group">
                                    <label for="notes">Notes</label>
                                    <textarea class="form-control" id="notes" name="notes" placeholder="Notes">{{ $order->notes }}</textarea>
                                </div>

                                <div class="form-group">
                                    <label for="totalPrice">Total Price</label>
                                    <input type="text" class="form-control" id="totalPrice" name="totalPrice" value="{{ $order->totalPrice }}" placeholder="Total Price">
                                </div>

                                <!-- You can add more fields if needed -->

                                <button type="submit" class="btn btn-primary mr-2">Update</button>
                                <a href="{{ route('orders.index') }}" class="btn btn-dark">Cancel</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection