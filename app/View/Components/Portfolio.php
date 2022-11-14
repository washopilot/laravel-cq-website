<?php

namespace App\View\Components;

use Illuminate\Support\Arr;
use Illuminate\View\Component;

class Portfolio extends Component {
    public string $title = '';
    public array $items = [];
    public array $tabs = [];
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct() {
        $this->title =
            'Somos una empresa especializada en la producción, ensamblaje, acabado y distribución de mobiliario metálico. Desde nuestros inicios, nuestra misión ha sido evolucionar en el campo de la producción y desarrollo de la región sur del país.';

        $this->items = [
            [
                'category' => ['Estantería'],
                'title' => 'Perchas',
                'images' => [
                    url('assets/images/portfolio/percha.jpg'),
                    url('assets/images/portfolio/percha-1.jpg'),
                    url('assets/images/portfolio/percha-2.jpg')
                ],
                'wide' => true
            ],
            [
                'category' => ['Exhibición'],
                'title' => 'Góndola Cabecera',
                'images' => [url('assets/images/portfolio/gondolac.jpg'), url('assets/images/portfolio/gondolac-1.jpg')],
                'wide' => false
            ],
            [
                'category' => ['Exhibición'],
                'title' => 'Góndola Doble',
                'images' => [url('assets/images/portfolio/gondolad.jpg'), url('assets/images/portfolio/gondolad-1.jpg')],
                'wide' => false
            ],
            [
                'category' => ['Exhibición'],
                'title' => 'Góndola Doble',
                'images' => [url('assets/images/portfolio/gondolad.jpg'), url('assets/images/portfolio/gondolad-1.jpg')],
                'wide' => false
            ],
            [
                'category' => ['Estantería'],
                'title' => 'Perchas',
                'images' => [
                    url('assets/images/portfolio/percha.jpg'),
                    url('assets/images/portfolio/percha-1.jpg'),
                    url('assets/images/portfolio/percha-2.jpg')
                ],
                'wide' => false
            ]
        ];

        $this->tabs = array_unique(Arr::flatten(Arr::pluck($this->items, 'category')));
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render() {
        return view('components.portfolio');
    }
}
