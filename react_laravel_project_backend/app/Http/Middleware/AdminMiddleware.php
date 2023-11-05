<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (!session()->has('id')) {
            Alert::error('error', 'You must be logged in as an admin to access this page!');

            return redirect('login');
        }

        return $next($request);
    }
}
