<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Slider extends Component {
    public array $slides = [];

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct() {
        $this->slides = [
            0 => [
                'paragraph_1' => ['Lo ', ' mejor ...'],
                'paragraph_2' => ['... en ', 'muebles metálicos']
            ],
            1 => [
                'paragraph_1' => ['Trabajamos ', ' con la mejor tecnología '],
                'paragraph_2' => ['Con una multitud de clientes satisfechos, somos un refrente a nivel nacional'],
                'href_show_more' => 'javascript:void(0);'
            ]
        ];
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render() {
        return view('components.slider');
    }
}
