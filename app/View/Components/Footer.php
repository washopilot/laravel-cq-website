<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Footer extends Component
{
    public array $navigationItems = [];
    public array $contact = [];
    public array $socials = [];
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->navigationItems = [
            ['label' => 'Acerca de', 'href' => '#acerca', 'active' => ''],
            ['label' => 'Galería', 'href' => '#galeria', 'active' => ''],
            ['label' => 'Configura tu producto', 'href' => '#galeria', 'active' => 'current'],
            ['label' => 'Contacto', 'href' => '#contacto', 'active' => ''],
        ];
        $this->contact = ['description' => 'Principal', 'address' => 'Edificio Carrión Quezada (Piso 1-2) Av. Manuel Agustín Aguirre y Mercadillo'];
        $this->socials = [
            ['title' => 'Facebook', 'icon' => 'icon-facebook', 'href' => url('images/portfolio/percha.jpg')],
            ['title' => 'Twitter', 'icon' => 'icon-twitter', 'href' => url('images/portfolio/percha.jpg')],
            ['title' => 'Pinterest', 'icon' => 'icon-pinterest', 'href' => url('images/portfolio/percha.jpg')],

        ];
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.footer');
    }
}
