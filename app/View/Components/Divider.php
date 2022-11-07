<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Divider extends Component {
    public string $title = '';
    public string $href = '';
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct() {
        $this->title = 'Configura tu producto a tu gusto. ';
        $this->href = 'javascript:void(0);';
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render() {
        return view('components.divider');
    }
}
