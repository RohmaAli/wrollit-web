<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Contactmail extends Mailable
{
    use Queueable, SerializesModels;
    public $name, $message, $phone;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $message, $phone)
    {
        //
        $this->name = $name;
        $this->message = $message;
        $this->phone = $phone;

    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $name = $this->name;
        $message = $this->message;

        $phone = $this->phone;
        return $this->markdown('emails.contacts.mail', compact('name', 'message','phone'));
    }
}
