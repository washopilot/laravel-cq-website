<?php

namespace App\View\Components;

use Illuminate\View\Component;

class SectionWhy extends Component
{
    public array $title = [];
    public array $items = [];
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->title = ['¿Por qué', 'elegirnos?'];

        $this->items = [
            ['icon' => 'bi-patch-check', 'href' => 'javascript:void(0);', 'title' => 'Excelente Calidad', 'description' => 'Nos aseguramos de utilizar los mejores materiales y acabados'],
            ['icon' => 'icon-truck1', 'href' => 'javascript:void(0);', 'title' => 'Envío rápido y oprtuno', 'description' => 'Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view.'],
            ['icon' => 'bi-shield-check', 'href' => 'javascript:void(0);', 'title' => 'Seguro', 'description' => 'Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view.'],

        ];
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.section-why');
    }
}
