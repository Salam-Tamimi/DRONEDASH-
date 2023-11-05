<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use RealRashid\SweetAlert\Facades\Alert;
use Illuminate\Support\Facades\Session;

class AdminController extends Controller
{

    public function index()
    {
        return view('AdminDashboard.Pages.login');
    }


    public function home()
    {
        return view('AdminDashboard.Pages.index');
    }


    public function AdminLogin(Request $request)
    {
        $admin = Admin::where('email', $request->email)->first();

        if ($admin) {
            if ($request->password == $admin->password) {
                $request->session()->put('id', $admin->id);

                return view('AdminDashboard.Pages.index');
            } else {
                Alert::error('error', 'Password does not match');
                return back();
            }
        } else {
            Alert::error('error', 'This email is not registered');
            return back();
        }
    }

    public function logout()
    {
        if (Session::has('id')) {
            Session::pull('id');
        }
        return redirect()->route('login');
    }
}
