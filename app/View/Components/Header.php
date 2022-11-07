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
            ['label' => 'Acerca de', 'href' => '#acerca', 'active' => ''],
            ['label' => 'Galería', 'href' => '#galeria', 'active' => ''],
            ['label' => 'Configura tu producto', 'href' => '#galeria', 'active' => 'current'],
            ['label' => 'Contacto', 'href' => '#contacto', 'active' => '']
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
