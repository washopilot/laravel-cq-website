<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Mail\ContactForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class Contact extends Component {
    public string $coordinates = '';
    public array $addresses = [];
    public array $contacts = [];

    public function __construct() {
        $this->coordinates = '-4.001825,-79.204704';
        $this->addresses = [
            [
                'description' => 'Principal',
                'address' =>
                    'Edificio Carrión Quezada (Piso 1-2) Av. Manuel Agustín Aguirre y Mercadillo. LOJA - ECUADOR'
            ]
        ];
        $this->contacts = [
            ['title' => 'Teléfono', 'description' => '07 2565826'],
            ['title' => 'Teléfono', 'description' => '0984244957'],
            ['title' => 'Email', 'description' => 'industriascq@hotmail.com']
        ];
    }

    public function update() {


        session()->flash('message', 'Su mensaje ha sido enviado exitosamente. Pronto le contestaremos');
        // return redirect()->route('home');

    }

    public function render() {
        return view('livewire.contact');
    }
}
