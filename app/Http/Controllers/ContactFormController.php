<?php

namespace App\Http\Controllers;

use App\Mail\ContactForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactFormController extends Controller {
    //
    public function send(Request $request) {
        // $data = $request->validate([
        //     'template-contactform-name' => 'required',
        //     'template-contactform-email' => 'required',
        //     'template-contactform-phone' => 'required',
        //     'subject' => 'required',
        //     'template-contactform-message' => 'required'
        // ]);

        // Mail::to(env('MAIL_TO_ADDRESS'))->send(new ContactForm($data));

        // return redirect()
        //     ->route('home')
        //     ->with('data', $data)
        //     ->with('message', 'Su mensaje ha sido enviado exitosamente. Pronto le contestaremos');
    }
}
