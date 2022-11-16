<?php

namespace App\Http\Controllers;

use App\Mail\ContactForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactFormController extends Controller {
    //
    public function send(Request $request) {
        $data = $request->validate([
            'template-contactform-name' => 'required',
            'template-contactform-email' => 'required',
            'template-contactform-phone' => 'required',
            'subject' => 'required',
            'template-contactform-message' => 'required'
        ]);

        // dump(new ContactForm($data));

        // Mail::to('washopilot@yahoo.com')->send(new ContactForm($data));

        return redirect()
            ->route('home')
            ->with('data', $data)
            ->with('message', 'Message sent succesfully')
            ->send();
    }
}
