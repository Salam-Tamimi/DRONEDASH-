<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\LoginGoogle;

Route::post('/register', [RegisteredUserController::class, 'store'])
    ->middleware('guest')
    ->name('register');

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->middleware('guest')
    ->name('login');

Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
    ->middleware('guest')
    ->name('password.email');

Route::post('/reset-password', [NewPasswordController::class, 'store'])
    ->middleware('guest')
    ->name('password.store');

Route::get('/verify-email/{id}/{hash}', VerifyEmailController::class)
    ->middleware(['auth', 'signed', 'throttle:6,1'])
    ->name('verification.verify');

Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    ->middleware(['auth', 'throttle:6,1'])
    ->name('verification.send');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// Additional route for getting all categories in API format
Route::get('/categories', [CategoryController::class, 'getAllCategories']);
// Route::resource('reviews',[ ReviewController::class ,'getAllReviews']);
// Route::resource('review/{id}',[ ReviewController::class ,'getSingleReview']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/*---------------------------------------- Marah Routes ----------------------------------------*/
Route::get('getUserInfo/{id}', [UserController::class, 'getUserInfo']);
Route::put('updateUserPass/{id}', [UserController::class, 'updateUserPass']);
Route::put('updateUserInfo/{id}', [UserController::class, 'updateUserInfo']);
Route::post('updateUserImage/{id}', [UserController::class, 'updateUserImage']);

Route::post('addNewContactMessage', [ContactController::class, 'addNewContactMessage']);

Route::get('getTheLastUserOrder/{id}', [OrderController::class, 'getTheLastUserOrder']);
/*-------------------------------------- Marah Routes End --------------------------------------*/


Route::post('/order', [OrderController::class, 'storee']);
// Additional route for getting all categories in API format
Route::get('/categories', [CategoryController::class, 'getAllCategories']);
Route::get('/category/{id}', [CategoryController::class, 'getCategory']);
Route::get('/items/{id}', [ItemController::class, 'getAllItems']);
Route::get('/item/{id}', [ItemController::class, 'getSingleItem']);
// Route::resource('reviews',[ ReviewController::class ,'getAllReviews']);
// Route::resource('review/{id}',[ ReviewController::class ,'getSingleReview']);
Route::get('/review/{id}', [ReviewController::class, 'getSingleReview']);
Route::get('/reviews', [ReviewController::class, 'getAllReviews']);
// Route::post('/review/{id}', [ReviewController::class, 'addNewReview']);
Route::post('/review', [ReviewController::class, 'addNewReview']);
Route::post('/users', [UserController::class, 'getAllUsers']);
Route::put('/editReview/{id}/{user_id}', [ReviewController::class, 'editReview']);
Route::delete('/deleteReview/{id}/{user_id}', [ReviewController::class, 'deleteReview']);




Route::post('google', [LoginGoogle::class, 'google'])->name('google');
