<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Http\Response;

class LoginGoogle extends Controller
{


    public function google(Request $request)
    {
        try {
            $current_user = User::where('google_id', $request->id)->first();

            if ($current_user) {
                Auth::login($current_user);
                return response()->json(['message' => 'User logged in successfully', 'user' => $current_user]);
            } else {
                $newUser = User::updateOrCreate(['email' => $request->email], [
                    'name' => $request->name,
                    'google_id' => $request->id,
                ]);

                Auth::login($newUser);
                return response()->json(['message' => 'New user registered and logged in', 'user' => $newUser]);
            }
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
