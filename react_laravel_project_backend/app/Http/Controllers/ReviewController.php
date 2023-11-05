<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use App\DataTables\ReviewDataTable;
use App\Models\Item;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Log;
// use Illuminate\Http\JsonResponse;

class ReviewController extends Controller
{
    // This function returns all reviews for a specific item as a response to the API.
    public function getAllReviews(): JsonResponse
    {
        $reviews = Review::with('user')->get();
        return response()->json($reviews, 200);
    }

    public function getSingleReview($id)
    {
        $item = Item::find($id);

        if (!$item) {
            return response()->json(['error' => 'Item not found'], 404);
        }

        $reviews = Review::where('item_id', $id)->with('user')->get();


        return response()->json($reviews);
    }


    // This function adds a new review that comes from a React page as a response to the API.


public function addNewReview(Request $request): JsonResponse
{
    $formattedDate = Carbon::now()->format('Y-m-d');

    $review = Review::create([
        'comment' => $request->comment,
        'user_id' => $request->user_id,
        'item_id' => $request->item_id,
        'date' => $formattedDate, 
    ]);
    $review->load('user');
    return response()->json($review);
}




    // This function returns a list of reviews.
    public function index()
    {
        $reviews = Review::all();
        return response()->json($reviews, 200);
    }


    public function indexDash(ReviewDataTable $dataTables)
    {
        return $dataTables->render('AdminDashboard.Pages.review.index');
    }



    // This function deletes a specific review.
    public function destroy(Review $review)
    {
        $review->delete();
        return response()->json(null, 204);
    }
}
