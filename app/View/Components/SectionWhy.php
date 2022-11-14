<?php

namespace App\View\Components;

use Illuminate\View\Component;

class SectionWhy extends Component {
    public array $title = [];
    public array $items = [];
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct() {
        $this->title = ['¿Por qué', 'elegirnos?'];

        $this->items = [
            [
                'icon' => 'icon-handshake1',
                'href' => 'javascript:void(0);',
                'title' => 'Compromiso',
                'description' => 'La satisfacción de nuestros clientes y la calidad del producto, nuestro principal objetivo'
            ],
            [
                'icon' => 'icon-award',
                'href' => 'javascript:void(0);',
                'title' => 'Calidad',
                'description' =>
                    'Somos especialistas en la fabricación y proyección de muebles metálicos, nos apasiona lo que hacemos.'
            ],
            [
                'icon' => 'icon-settings',
                'href' => 'javascript:void(0);',
                'title' => 'Innovación',
                'description' =>
                    'Invertimos e innovamos en los procesos de calidad y producción, adaptándonos a las necesidades del mercado.'
            ]
        ];
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render() {
        return view('components.section-why');
    }
}
