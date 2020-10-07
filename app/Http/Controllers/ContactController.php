<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;
use App\User;

class ContactController extends Controller
{
    public function test()
    {
        return view('index-3');
    }
    public function contactUs(Request $request)
    {
    
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->message = $request->message;
        $user->save();

        Mail::to('contact@wrollit.com')->send(new ContactMail($request->name,$request->message, $request->phone ));

    }
}
