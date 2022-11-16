<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Artesaos\SEOTools\Facades\SEOTools;

class AppLayout extends Component {
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct() {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render() {
        SEOTools::setTitle('Industrias metálicas Carrión Quezada', false);
        SEOTools::setDescription('Empresa lojana de muebles metálicos');
        SEOTools::opengraph()->setUrl('https://industriasmetalicascq.com');
        SEOTools::setCanonical('https://industriasmetalicascq.com');
        SEOTools::opengraph()->addProperty('type', 'articles');
        // SEOTools::twitter()->setSite('@Nigmacode');

        return view('components.app-layout');
    }
}
