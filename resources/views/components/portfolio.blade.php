<div id="gallery-section" class="page-section pt-0">

    <div class="section m-0">
        <div class="clearfix container">
            <div class="center mx-auto" style="max-width: 900px;">
                <h2 class="fw-light ls1 mb-0">{{ $title }}</h2>
            </div>
        </div>
    </div>

    <div class="section border-top-0 m-0">
        <div class="container text-center">

            <div class="heading-block center">
                <h2>Nuestros productos</h2>
                <span>Ofrecemos una amplia variedad en muebles metálicos para su necesidad...</span>
            </div>


        </div>
    </div>

    <!-- Page Sub Menu
  ============================================= -->
    <div id="page-menu" class="no-sticky">
        <div id="page-menu-wrap">
            <div class="container">
                <div class="page-menu-row">

                    <div class="page-menu-title"></div>

                    <nav class="page-menu-nav">
                        <ul class="page-menu-container custom-filter" data-container="#portfolio"
                            data-active-class="current">
                            <li class="page-menu-item current"><a href="#" data-filter="*">
                                    <div>Mostrar todos</div>
                                </a></li>

                            @foreach ($tabs as $tab)
                                <li class="page-menu-item"><a href="#" data-filter=".pf-{{ $tab }}">
                                        <div>{{ $tab }}</div>
                                    </a></li>
                            @endforeach
                            {{-- <li class="page-menu-item"><a href="#" data-filter=".pf-illustrations">
                                    <div>Illustrations</div>
                                </a></li>
                            <li class="page-menu-item"><a href="#" data-filter=".pf-uielements">
                                    <div>UI Elements</div>
                                </a></li>
                            <li class="page-menu-item"><a href="#" data-filter=".pf-media">
                                    <div>Media</div>
                                </a></li>
                            <li class="page-menu-item"><a href="#" data-filter=".pf-graphics">
                                    <div>Graphics</div>
                                </a></li> --}}
                        </ul>
                    </nav>

                    <div id="page-menu-trigger"><i class="icon-reorder"></i></div>

                </div>
            </div>
        </div>
    </div><!-- #page-menu end -->

    <!-- Portfolio Items
    ============================================= -->
    <div id="portfolio" class="portfolio row grid-container g-0">

        @foreach ($items as $item)
            <!-- Portfolio Item: Start -->

            @if ($item['wide'])
                <article
                    class="portfolio-item col-lg-6 col-md-4 col-sm-6 col-12 @foreach ($item['category'] as $category) pf-{{ $category }} @endforeach wide">
                @else
                    <article
                        class="portfolio-item col-lg-3 col-md-4 col-sm-6 col-12 @foreach ($item['category'] as $category) pf-{{ $category }} @endforeach">
            @endif

            <!-- Grid Inner: Start -->
            <div class="grid-inner">
                <!-- Image: Start -->
                <div class="portfolio-image">

                    @if ($loop->index % 2 == 0)
                        <div class="fslider" data-arrows="false" data-speed="400" data-pause="4000">
                        @else
                            <div class="fslider" data-arrows="false" data-speed="650" data-pause="3500"
                                data-animation="fade">
                    @endif


                    <div class="flexslider">
                        <div class="slider-wrap">
                            @foreach ($item['images'] as $image)
                                <div class="slide">
                                    <a href="#"><img src="{{ $image }}" alt="{{ $item['title'] }}"></a>
                                </div>
                            @endforeach
                            {{-- <div class="slide"><a href="portfolio-single-gallery.html"><img
                                                src="images/portfolio/percha-1.jpg" alt="Morning Dew"></a></div>
                                    <div class="slide"><a href="portfolio-single-gallery.html"><img
                                                src="images/portfolio/percha-2.jpg" alt="Morning Dew"></a>
                                    </div> --}}
                        </div>
                    </div>
                </div>
                <!-- Overlay: Start -->
                <div class="bg-overlay" data-lightbox="gallery">
                    <div class="bg-overlay-content flex-column" data-hover-animate="fadeIn">
                        <div class="portfolio-desc center pt-0" data-hover-animate="fadeInDownSmall"
                            data-hover-animate-out="fadeOutUpSmall" data-hover-speed="350">
                            <h2>{{ $item['title'] }}</h2>
                            @foreach ($item['category'] as $category)
                                <span>{{ $category }}</span>
                            @endforeach

                        </div>
                        <div class="d-flex">
                            @foreach ($item['overlay'] as $image)
                                @if ($loop->index == 0)
                                    <a href="{{ $image }}" class="overlay-trigger-icon bg-secondary text-light"
                                        data-hover-animate="fadeInUpSmall" data-hover-animate-out="fadeOutDownSmall"
                                        data-hover-speed="350" data-lightbox="gallery-item"><i
                                            class="icon-line-stack-2"></i></a>
                                @else
                                    <a href="{{ $image }}" class="d-none" data-lightbox="gallery-item"></a>
                                @endif
                            @endforeach

                            {{-- <a href="images/portfolio/percha-2.jpg" class="d-none"
                                        data-lightbox="gallery-item"></a> --}}
                            {{-- <a href="portfolio-single.html" class="overlay-trigger-icon bg-light text-dark"
                                    data-hover-animate="fadeInUpSmall" data-hover-animate-out="fadeOutDownSmall"
                                    data-hover-speed="350"><i class="icon-line-ellipsis"></i></a> --}}
                        </div>
                    </div>
                    <div class="bg-overlay-bg" data-hover-animate="fadeIn"></div>
                </div>
                <!-- Overlay: End -->
            </div>
            <!-- Image: End -->
    </div>
    <!-- Grid Inner: End -->
    </article>
    <!-- Portfolio Item: End -->
    @endforeach

    {{-- <div class="topmargin center"><a href="#" class="button button-border button-circle fw-semibold">View More
            Projects</a></div> --}}

</div>
