<?php

namespace App\Http\Controllers;

use App\DataTables\ContactDataTable;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ContactController extends Controller
{

    //This function to add contact message that come from react page as response to API 
    public function addNewContactMessage(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'email' => 'required|email',
                'message' => 'required|string',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        Contact::create([
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,
        ]);

        return response()->json(['message' => 'Contact Message Saved Successfully'], 201);
    }


    public function index(ContactDataTable $dataTables)
    {
        return $dataTables->render('AdminDashboard.Pages.user.index');
    }
}
