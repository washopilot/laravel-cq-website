        <!-- Footer
  ============================================= -->
        <footer id="footer" class="dark border-0">

            <div class="center container">
                <div class="footer-widgets-wrap">

                    <div class="row clearfix mx-auto">

                        <div class="col-lg-5">

                            <div class="widget clearfix">
                                <h4>Enlaces del sitio</h4>

                                <ul class="list-unstyled footer-site-links mb-0">
                                    @foreach ($navigationItems as $item)
                                        <li><a href="{{ $item['href'] }}" data-scrollto="#wrapper"
                                                data-easing="easeInOutExpo" data-speed="1250"
                                                data-offset="70">{{ $item['label'] }}</a></li>
                                    @endforeach

                                    {{-- <li><a href="#" data-scrollto="#wrapper" data-easing="easeInOutExpo"
                                            data-speed="1250" data-offset="70">Top</a></li>
                                    <li><a href="#" data-scrollto="#section-about" data-easing="easeInOutExpo"
                                            data-speed="1250" data-offset="70">About</a></li>
                                    <li><a href="#" data-scrollto="#section-works" data-easing="easeInOutExpo"
                                            data-speed="1250" data-offset="70">Works</a></li>
                                    <li><a href="#" data-scrollto="#section-services" data-easing="easeInOutExpo"
                                            data-speed="1250" data-offset="70">Services</a></li>
                                    <li><a href="#" data-scrollto="#section-blog" data-easing="easeInOutExpo"
                                            data-speed="1250" data-offset="70">Blog</a></li>
                                    <li><a href="#" data-scrollto="#section-contact" data-easing="easeInOutExpo"
                                            data-speed="1250" data-offset="70">Contact</a></li> --}}
                                </ul>
                            </div>

                        </div>

                        <div class="col-lg-2">

                            {{-- <div class="widget subscribe-widget clearfix" data-loader="button">
                        <h4>Subscribe</h4>

                        <div class="widget-subscribe-form-result"></div>
                        <form id="widget-subscribe-form" action="include/subscribe.php" method="post"
                            class="mb-0">
                            <input type="email" id="widget-subscribe-form-email"
                                name="widget-subscribe-form-email"
                                class="form-control form-control-lg not-dark required email"
                                placeholder="Your Email Address">
                            <button class="button button-border button-circle button-light topmargin-sm"
                                type="submit">Subscribe Now</button>
                        </form>
                    </div> --}}

                        </div>

                        <div class="col-lg-5">

                            <div class="widget clearfix">
                                <h4>Contacto</h4>

                                <p class="lead">{{ $contact['address'] }}</p>
                                {{-- <p class="lead">795 Folsom Ave, Suite 600<br>San Francisco, CA 94107</p> --}}

                                <div class="center topmargin-sm">
                                    @foreach ($socials as $social)
                                        <a href="{{ $social['href'] }}"
                                            class="social-icon si-medium si-{{ substr($social['icon'], 5, null) }} inline-block border-0"
                                            title="{{ $social['title'] }}">
                                            <i class="{{ $social['icon'] }}"></i>
                                            <i class="{{ $social['icon'] }}"></i>
                                        </a>
                                    @endforeach

                                    {{-- <a href="#" class="social-icon si-small si-facebook inline-block border-0"
                                        title="Facebook">
                                        <i class="icon-facebook"></i>
                                        <i class="icon-facebook"></i>
                                    </a>
                                    <a href="#" class="social-icon si-small si-twitter inline-block border-0"
                                        title="Twitter">
                                        <i class="icon-twitter"></i>
                                        <i class="icon-twitter"></i>
                                    </a>
                                    <a href="#" class="social-icon si-small si-github inline-block border-0"
                                        title="Github">
                                        <i class="icon-github"></i>
                                        <i class="icon-github"></i>
                                    </a>
                                    <a href="#" class="social-icon si-small si-pinterest inline-block border-0"
                                        title="Pinterest">
                                        <i class="icon-pinterest"></i>
                                        <i class="icon-pinterest"></i>
                                    </a> --}}
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div id="copyrights">
                <div class="center clearfix container">
                    Con soporte tecnológico de <a href="https://google.com" target="_blank">Fernando Chicaiza</a> |
                    Todos los derechos reservados
                </div>
            </div>

        </footer><!-- #footer end -->
