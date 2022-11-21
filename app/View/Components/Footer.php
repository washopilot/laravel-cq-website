<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Footer extends Component {
    public array $navigationItems = [];
    public array $contact = [];
    public array $socials = [];
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct() {
        $this->navigationItems = [
            ['label' => 'Inicio', 'href' => '#wrapper'],
            ['label' => 'Acerca de', 'href' => '#why-section'],
            ['label' => 'Galería', 'href' => '#gallery-section'],
            ['label' => 'Configura tu producto', 'href' => '#visor-section'],
            ['label' => 'Contacto', 'href' => '#section-contact']
        ];
        $this->contact = [
            'description' => 'Principal',
            'address' => 'Edificio Carrión Quezada (Piso 1-2) Av. Manuel Agustín Aguirre y Mercadillo. LOJA - ECUADOR'
        ];
        $this->socials = [
            ['title' => 'Facebook', 'icon' => 'icon-facebook', 'href' => 'javascript:void(0);'],
            ['title' => 'Twitter', 'icon' => 'icon-twitter', 'href' => 'javascript:void(0);'],
            ['title' => 'Pinterest', 'icon' => 'icon-pinterest', 'href' => 'javascript:void(0);']
        ];
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render() {
        return view('components.footer');
    }
}
