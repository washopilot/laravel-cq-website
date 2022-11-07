<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Contact extends Component {
    public string $coordinates = '';
    public array $addresses = [];
    public array $contacts = [];

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct() {
        $this->coordinates = '-4.001825,-79.204704';
        $this->addresses = [
            [
                'description' => 'Principal',
                'address' => 'Edificio Carrión Quezada (Piso 1-2) Av. Manuel Agustín Aguirre y Mercadillo'
            ]
        ];
        $this->contacts = [
            ['title' => 'Teléfono', 'description' => '07 2565826'],
            ['title' => 'Teléfono', 'description' => '0984244957'],
            ['title' => 'Email', 'description' => 'industriascq@hotmail.com']
        ];
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render() {
        return view('components.contact');
    }
}
