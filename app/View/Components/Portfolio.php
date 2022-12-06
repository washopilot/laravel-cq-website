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
            'Somos una empresa orgullosamente lojana especializada en la producción, ensamblaje, acabado y distribución de mobiliario metálico. Desde nuestros inicios, nuestra misión ha sido evolucionar en el campo de la producción y desarrollo de la región sur del país.';

        $this->items = [
            [
                'category' => ['Estantería'],
                'title' => 'Perchas',
                'images' => [url('assets/images/portfolio/percha.jpg'), url('assets/images/portfolio/percha2.jpg')],
                'overlay' => [url('assets/images/portfolio/percha.jpg'), url('assets/images/portfolio/percha2.jpg')],
                'wide' => true
            ],
            [
                'category' => ['Exhibición'],
                'title' => 'Góndola Central - Doble',
                'images' => [
                    url('assets/images/portfolio/gondola-c2.jpeg')
                    // url('assets/images/portfolio/gondola-c3.jpeg')
                ],
                'overlay' => [
                    url('assets/images/portfolio/gondola-c1.jpeg'),
                    url('assets/images/portfolio/gondola-c2.jpeg'),
                    url('assets/images/portfolio/gondola-c3.jpeg'),
                    url('assets/images/portfolio/gondola-c4.jpg'),
                    url('assets/images/portfolio/gondola-c5.jpeg')
                ],
                'wide' => true
            ],
            [
                'category' => ['Exhibición'],
                'title' => 'Góndola Lateral',
                'images' => [url('assets/images/portfolio/gondola-l4.jpeg')],
                'overlay' => [
                    url('assets/images/portfolio/gondola-l4.jpeg'),
                    url('assets/images/portfolio/gondola-l1.jpg'),
                    url('assets/images/portfolio/gondola-l2.jpeg'),
                    url('assets/images/portfolio/gondola-l5.jpeg'),
                    url('assets/images/portfolio/gondola-l3.jpeg')
                ],
                'wide' => true
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
