<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Header extends Component {
    public array $navigationItems = [];
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct() {
        $this->navigationItems = [
            ['label' => 'Inicio', 'href' => '#wrapper', 'active' => 'current'],
            ['label' => 'Acerca de', 'href' => '#why-section', 'active' => ''],
            ['label' => 'Galería', 'href' => '#page-menu', 'active' => ''],
            ['label' => 'Configura tu producto', 'href' => '#visor-section', 'active' => ''],
            ['label' => 'Contacto', 'href' => '#section-contact', 'active' => '']
        ];
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render() {
        return view('components.header');
    }
}
