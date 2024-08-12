<!-- Header
============================================= -->
<header id="header" class="full-header border-full-header dark" data-sticky-shrink="true" data-sticky-class="not-dark"
    data-sticky-offset="full" data-sticky-offset-negative="100">
    <div id="header-wrap">
        <div class="container-md">
            <div class="header-row">

                <!-- Logo
============================================= -->
                <div id="logo" class="my-2">
                    <a href="/" class="standard-logo"
                        data-dark-logo="{{ asset('assets/images/logo/CQ-LOGO.png') }}"><img
                            src="{{ asset('assets/images/logo/CQ-LOGO.png') }}" alt="Canvas Logo"></a>
                    <a href="/" class="retina-logo"
                        data-dark-logo="{{ asset('assets/images/logo/CQ-LOGO.png') }}"><img
                            src="{{ asset('assets/images/logo/CQ-LOGO.png') }}" alt="Canvas Logo"></a>

                </div><!-- #logo end -->

                {{-- <div class="header-misc">

                    <div class="side-panel-trigger header-misc-icon">
                        <a href="#"><i class="icon-ellipsis-v"></i></a>
                    </div>

                </div> --}}

                <!-- Primary Navigation icon in mobile
   ============================================= -->
                <div id="primary-menu-trigger">
                    <svg class="svg-trigger" viewBox="0 0 100 100">
                        <path
                            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20">
                        </path>
                        <path d="m 30,50 h 40"></path>
                        <path
                            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20">
                        </path>
                    </svg>
                </div>

                <!-- Primary Navigation
   ============================================= -->
                <nav class="primary-menu with-arrows block-nav-menu style-6">

                    <ul class="one-page-menu menu-container" data-easing="easeInOutExpo" data-speed="1250"
                        data-offset="160">
                        <!-- justify-content-center class for center menu-->
                        {{-- <li class="menu-item current">
                            <a class="menu-link" href="#">
                                <div>Home</div>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="#">
                                <div>Features</div>
                            </a>
                            <ul class="sub-menu-container">
                                <li class="menu-item">
                                    <a class="menu-link" href="#">
                                        <div><i class="icon-stack"></i>Dropdown 1</div>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a class="menu-link" href="#">
                                        <div><i class="icon-umbrella"></i>Dropdown 2</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="#">
                                <div>Pages</div>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="#">
                                <div>Portfolio</div>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="#">
                                <div>Blog</div>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="#">
                                <div>Shop</div>
                            </a>
                        </li> --}}
                        {{-- <li class="menu-item mega-menu">
                            <a class="menu-link" href="#">
                                <div>Shortcodes</div>
                            </a>
                        </li> --}}

                        @foreach ($navigationItems as $item)
                            <li class="menu-item {{ $item['active'] }}">
                                <a class="menu-link" href="{{ $item['label'] === 'Productos' ? $item['href'] : '#' }}"
                                    @if ($item['label'] !== 'Productos') data-href="{{ $item['href'] }}" @endif>
                                    <div>{{ $item['label'] }}
                                    </div>
                                </a>
                            </li>
                        @endforeach
                    </ul>

                </nav><!-- #primary-menu end -->

            </div>
        </div>
    </div>
    <div class="header-wrap-clone"></div>
</header><!-- #header end -->
