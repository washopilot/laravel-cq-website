<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>

    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="author" content="SemiColonWeb" />
    @viteReactRefresh
    @vite('resources/src/main.tsx')


    <!-- Stylesheets
 ============================================= -->
    {{-- <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700|Roboto:300,400,500,700&display=swap"
        rel="stylesheet" type="text/css" /> --}}
    <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Raleway:300,400,500,600,700,800,900|Poppins:700|Oswald:300&display=swap"
        rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="{{ asset('css/bootstrap.css') }}" type="text/css" />
    <link rel="stylesheet" href="{{ asset('style.css') }}" type="text/css" />

    <!-- One Page Module Specific Stylesheet -->
    <link rel="stylesheet" href="{{ asset('one-page/onepage.css') }}" type="text/css" />
    <!-- / -->

    <link rel="stylesheet" href="{{ asset('css/dark.css') }}" type="text/css" />
    <link rel="stylesheet" href="{{ asset('css/font-icons.css') }}" type="text/css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css"
        type="text/css" />
    <link rel="stylesheet" href="{{ asset('one-page/css/et-line.css') }}" type="text/css" />
    <link rel="stylesheet" href="{{ asset('css/animate.css') }}" type="text/css" />
    <link rel="stylesheet" href="{{ asset('css/magnific-popup.css') }}" type="text/css" />

    <link rel="stylesheet" href="{{ asset('one-page/css/fonts.css') }}" type="text/css" />

    <link rel="stylesheet" href="{{ asset('css/custom.css') }}" type="text/css" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- SLIDER REVOLUTION 5.x CSS SETTINGS -->
    <link rel="stylesheet" type="text/css"
        href="{{ asset('include/rs-plugin/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css') }}">
    <link rel="stylesheet" type="text/css" href="include/rs-plugin/fonts/font-awesome/css/font-awesome.css">

    <link rel="stylesheet" type="text/css" href="include/rs-plugin/css/addons/typewriter.css">
    <link rel="stylesheet" type="text/css" href="include/rs-plugin/css/addons/revolution.addon.revealer.css">
    <link rel="stylesheet" type="text/css" href="include/rs-plugin/css/addons/revolution.addon.revealer.preloaders.css">

    <link rel="stylesheet" type="text/css" href="include/rs-plugin/css/settings.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="include/rs-plugin/css/layers.css">
    <link rel="stylesheet" type="text/css" href="include/rs-plugin/css/navigation.css">

    <!-- ADD-ONS CSS FILES -->
    <link rel="stylesheet" type="text/css" href="include/rs-plugin/css/addons/revolution.addon.particles.css">

    <!-- Document Title
 ============================================= -->
    <title>One Page Module | Canvas</title>

</head>

{{-- <div id="cover" class="css3-spinner">
    <div class="css3-spinner-bounce1"></div>
    <div class="css3-spinner-bounce2"></div>
    <div class="css3-spinner-bounce3"></div>
</div> --}}

<body class="stretched side-push-panel">

    <div class="body-overlay"></div>

    <div id="side-panel" class="dark">

        <div id="side-panel-trigger-close" class="side-panel-trigger"><a href="#"><i
                    class="icon-line-cross"></i></a></div>

        <div class="side-panel-wrap">

            <div class="widget widget_links clearfix">

                <h4>About Canvas</h4>

                <div style="font-size: 14px; line-height: 1.7;">
                    <address style="line-height: 1.7;">
                        795 Folsom Ave, Suite 600<br>
                        San Francisco, CA 94107<br>
                    </address>

                    <div class="clear topmargin-sm"></div>

                    <abbr title="Phone Number">Phone:</abbr> (1) 8547 632521<br>
                    <abbr title="Fax">Fax:</abbr> (1) 11 4752 1433<br>
                    <abbr title="Email Address">Email:</abbr> info@canvas.com
                </div>

            </div>

            <div class="widget clearfix">

                <h4>Connect Socially</h4>

                <a href="#" class="social-icon si-small si-colored si-facebook" title="Facebook">
                    <i class="icon-facebook"></i>
                    <i class="icon-facebook"></i>
                </a>
                <a href="#" class="social-icon si-small si-colored si-twitter" title="Twitter">
                    <i class="icon-twitter"></i>
                    <i class="icon-twitter"></i>
                </a>
                <a href="#" class="social-icon si-small si-colored si-github" title="Github">
                    <i class="icon-github"></i>
                    <i class="icon-github"></i>
                </a>
                <a href="#" class="social-icon si-small si-colored si-pinterest" title="Pinterest">
                    <i class="icon-pinterest"></i>
                    <i class="icon-pinterest"></i>
                </a>
                <a href="#" class="social-icon si-small si-colored si-forrst" title="Forrst">
                    <i class="icon-forrst"></i>
                    <i class="icon-forrst"></i>
                </a>
                <a href="#" class="social-icon si-small si-colored si-linkedin" title="LinkedIn">
                    <i class="icon-linkedin"></i>
                    <i class="icon-linkedin"></i>
                </a>
                <a href="#" class="social-icon si-small si-colored si-gplus" title="Google Plus">
                    <i class="icon-gplus"></i>
                    <i class="icon-gplus"></i>
                </a>
                <a href="#" class="social-icon si-small si-colored si-instagram" title="Instagram">
                    <i class="icon-instagram"></i>
                    <i class="icon-instagram"></i>
                </a>
                <a href="#" class="social-icon si-small si-colored si-flickr" title="Flickr">
                    <i class="icon-flickr"></i>
                    <i class="icon-flickr"></i>
                </a>
                <a href="#" class="social-icon si-small si-colored si-skype" title="Skype">
                    <i class="icon-skype"></i>
                    <i class="icon-skype"></i>
                </a>

            </div>

        </div>

    </div>

    <!-- Document Wrapper
 ============================================= -->
    <div id="wrapper" class="clearfix">


        {{ $slot }}


        <!-- Content
  ============================================= -->
        <section id="content">
            <div class="content-wrap py-0">

                {{-- <div id="section-about" class="center page-section">

                    <div class="clearfix container">

                        <h2 class="bottommargin font-body mx-auto" style="max-width: 700px; font-size: 40px;">Somos los mejores en atención y calidad</h2>

                        <p class="lead bottommargin mx-auto" style="max-width: 800px;">Visítanos y estaremos gustosos en atenderte</p>

                        <p class="bottommargin" style="font-size: 16px;"><a href="#"
                                data-scrollto="#section-services" data-easing="easeInOutExpo" data-speed="1250"
                                data-offset="70" class="more-link">Learn more <i class="icon-angle-right"></i></a>
                        </p>

                        <div class="clear"></div>

                        <div class="row topmargin-lg mx-auto" style="max-width: 1000px;">

                            <div class="col-md-4 mb-5">

                                <div class="team">
                                    <div class="team-image">
                                        <img src="{{ asset('one-page/images/team/1.jpg') }}" alt="John Doe">
                                        <div class="bg-overlay">
                                            <div class="bg-overlay-content align-items-end"
                                                data-hover-animate="fadeIn" data-hover-speed="400">
                                                <a href="#"
                                                    class="social-icon si-borderless si-small si-facebook"
                                                    title="Facebook">
                                                    <i class="icon-facebook"></i>
                                                    <i class="icon-facebook"></i>
                                                </a>
                                                <a href="#"
                                                    class="social-icon si-borderless si-small si-twitter"
                                                    title="Twitter">
                                                    <i class="icon-twitter"></i>
                                                    <i class="icon-twitter"></i>
                                                </a>
                                                <a href="#" class="social-icon si-borderless si-small si-github"
                                                    title="Github">
                                                    <i class="icon-github"></i>
                                                    <i class="icon-github"></i>
                                                </a>
                                            </div>
                                            <div class="bg-overlay-bg" data-hover-animate="fadeIn"
                                                data-hover-speed="400"></div>
                                        </div>
                                    </div>
                                    <div class="team-desc team-desc-bg">
                                        <div class="team-title">
                                            <h4>John Doe</h4><span>CEO</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-4 mb-5">

                                <div class="team">
                                    <div class="team-image">
                                        <img src="{{ asset('one-page/images/team/2.jpg') }}" alt="Josh Clark">
                                        <div class="bg-overlay">
                                            <div class="bg-overlay-content align-items-end"
                                                data-hover-animate="fadeIn" data-hover-speed="400">
                                                <a href="#"
                                                    class="social-icon si-borderless si-small si-twitter"
                                                    title="Twitter">
                                                    <i class="icon-twitter"></i>
                                                    <i class="icon-twitter"></i>
                                                </a>
                                                <a href="#"
                                                    class="social-icon si-borderless si-small si-linkedin"
                                                    title="LinkedIn">
                                                    <i class="icon-linkedin"></i>
                                                    <i class="icon-linkedin"></i>
                                                </a>
                                                <a href="#" class="social-icon si-borderless si-small si-flickr"
                                                    title="Flickr">
                                                    <i class="icon-flickr"></i>
                                                    <i class="icon-flickr"></i>
                                                </a>
                                            </div>
                                            <div class="bg-overlay-bg" data-hover-animate="fadeIn"
                                                data-hover-speed="400"></div>
                                        </div>
                                    </div>
                                    <div class="team-desc team-desc-bg">
                                        <div class="team-title">
                                            <h4>Mary Jane</h4><span>Co-Founder</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-4 mb-5">

                                <div class="team">
                                    <div class="team-image">
                                        <img src="{{ asset('one-page/images/team/3.jpg') }}" alt="Mary Jane">
                                        <div class="bg-overlay">
                                            <div class="bg-overlay-content align-items-end"
                                                data-hover-animate="fadeIn" data-hover-speed="400">
                                                <a href="#"
                                                    class="social-icon si-borderless si-small si-twitter"
                                                    title="Twitter">
                                                    <i class="icon-twitter"></i>
                                                    <i class="icon-twitter"></i>
                                                </a>
                                                <a href="#" class="social-icon si-borderless si-small si-vimeo"
                                                    title="Vimeo">
                                                    <i class="icon-vimeo"></i>
                                                    <i class="icon-vimeo"></i>
                                                </a>
                                                <a href="#"
                                                    class="social-icon si-borderless si-small si-instagram"
                                                    title="Instagram">
                                                    <i class="icon-instagram"></i>
                                                    <i class="icon-instagram"></i>
                                                </a>
                                            </div>
                                            <div class="bg-overlay-bg" data-hover-animate="fadeIn"
                                                data-hover-speed="400"></div>
                                        </div>
                                    </div>
                                    <div class="team-desc team-desc-bg">
                                        <div class="team-title">
                                            <h4>Josh Clark</h4><span>Sales</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div> --}}

                <x-section-why />

                <x-divider />

                {{-- <x-portfolio /> --}}


                {{-- <div id="section-services" class="page-section pt-0">

                    <div class="section m-0">
                        <div class="clearfix container">
                            <div class="center mx-auto" style="max-width: 900px;">
                                <h2 class="fw-light ls1 mb-0">We enjoy working on the Services &amp; Products we
                                    provide as much as you need them. This help us in delivering your Goals easily.
                                    Browse through the wide range of services we provide.</h2>
                            </div>
                        </div>
                    </div>

                    <div class="row align-items-stretch">

                        <div class="col-lg-4 d-none d-md-block"
                            style="background: url('images/services/main-bg.jpg') center center no-repeat; background-size: cover;">
                        </div>
                        <div class="col-lg-8">
                            <div class="row align-items-stretch grid-border clearfix">
                                <div class="col-lg-4 col-md-6 col-padding">
                                    <div class="feature-box fbox-center fbox-dark fbox-plain">
                                        <div class="fbox-icon">
                                            <a href="#"><i class="icon-et-mobile op-gradient-icon"></i></a>
                                        </div>
                                        <div class="fbox-content fbox-content-sm">
                                            <h3>Responsive Framework</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-padding">
                                    <div class="feature-box fbox-center fbox-dark fbox-plain">
                                        <div class="fbox-icon">
                                            <a href="#"><i
                                                    class="icon-et-presentation op-gradient-icon"></i></a>
                                        </div>
                                        <div class="fbox-content fbox-content-sm">
                                            <h3>Beautifully Presented</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-padding">
                                    <div class="feature-box fbox-center fbox-dark fbox-plain">
                                        <div class="fbox-icon">
                                            <a href="#"><i class="icon-et-puzzle op-gradient-icon"></i></a>
                                        </div>
                                        <div class="fbox-content fbox-content-sm">
                                            <h3>Extensively Extendable</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-padding">
                                    <div class="feature-box fbox-center fbox-dark fbox-plain">
                                        <div class="fbox-icon">
                                            <a href="#"><i class="icon-et-gears op-gradient-icon"></i></a>
                                        </div>
                                        <div class="fbox-content fbox-content-sm">
                                            <h3>Powerfully Customizable</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-padding">
                                    <div class="feature-box fbox-center fbox-dark fbox-plain">
                                        <div class="fbox-icon">
                                            <a href="#"><i class="icon-et-genius op-gradient-icon"></i></a>
                                        </div>
                                        <div class="fbox-content fbox-content-sm">
                                            <h3>Geniusly Transformable</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-padding">
                                    <div class="feature-box fbox-center fbox-dark fbox-plain">
                                        <div class="fbox-icon">
                                            <a href="#"><i
                                                    class="icon-et-hotairballoon op-gradient-icon"></i></a>
                                        </div>
                                        <div class="fbox-content fbox-content-sm">
                                            <h3>Industrial Support</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="section dark m-0">
                        <div class="center mx-auto" style="max-width: 900px;">
                            <h2 class="fw-light ls1 mb-0">Like Our Services? Get an <a href="#"
                                    data-scrollto="#template-contactform" data-offset="140"
                                    data-easing="easeInOutExpo" data-speed="1250"
                                    class="button button-border button-circle button-light button-large my-0"
                                    style="position: relative; top: -3px;">Instant Quote</a></h2>
                        </div>
                    </div>

                    <div class="section parallax dark m-0"
                        style="background-image: url('one-page/images/page/testimonials.jpg'); padding: 150px 0;"
                        data-bottom-top="background-position:0px 0px;"
                        data-top-bottom="background-position:0px -300px;">

                        <div class="clearfix container">

                            <div class="row justify-content-end">
                                <div class="col-md-7">
                                    <div class="fslider testimonial testimonial-full border-0 bg-transparent p-0 shadow-none"
                                        data-arrows="false">
                                        <div class="flexslider">
                                            <div class="slider-wrap">
                                                <div class="slide">
                                                    <div class="testi-content">
                                                        <p>Similique fugit repellendus expedita excepturi iure
                                                            perferendis provident quia eaque vero numquam?</p>
                                                        <div class="testi-meta">
                                                            Steve Jobs
                                                            <span>Apple Inc.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="slide">
                                                    <div class="testi-content">
                                                        <p>Natus voluptatum enim quod necessitatibus quis expedita harum
                                                            provident eos obcaecati id culpa corporis molestias.</p>
                                                        <div class="testi-meta">
                                                            Collis Ta'eed
                                                            <span>Envato Inc.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="slide">
                                                    <div class="testi-content">
                                                        <p>Incidunt deleniti blanditiis quas aperiam recusandae
                                                            consequatur ullam quibusdam cum libero illo rerum!</p>
                                                        <div class="testi-meta">
                                                            John Doe
                                                            <span>XYZ Inc.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div> --}}

                {{-- <div id="section-blog" class="page-section">

                    <h2 class="text-uppercase fw-light ls3 font-body text-center">Recently From the Blog</h2>

                    <div class="section mb-0">
                        <div class="clearfix container">

                            <div class="row posts-md col-mb-50 mt-5 mb-0">

                                <div class="entry col-md-6">
                                    <div class="grid-inner row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="entry-image">
                                                <a href="#"><img src="one-page/images/blog/1.jpg"
                                                        alt="Paris"></a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 mt-lg-0 mt-3">
                                            <span class="before-heading fst-normal">Press &amp; Media</span>
                                            <div class="entry-title nott">
                                                <h3 class="fw-normal"><a href="#">Global Meetup Program is
                                                        Launching!</a></h3>
                                            </div>
                                            <div class="entry-content">
                                                <a href="#" class="more-link">Read more <i
                                                        class="icon-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="entry col-md-6">
                                    <div class="grid-inner row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="entry-image">
                                                <a href="#"><img src="one-page/images/blog/2.jpg"
                                                        alt="Paris"></a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 mt-lg-0 mt-3">
                                            <span class="before-heading fst-normal">Inside Scoops</span>
                                            <div class="entry-title nott">
                                                <h3 class="fw-normal"><a href="#">The New YouTube Economy
                                                        unfolds itself</a></h3>
                                            </div>
                                            <div class="entry-content">
                                                <a href="#" class="more-link">Read more <i
                                                        class="icon-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="entry col-md-6">
                                    <div class="grid-inner row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="entry-image">
                                                <a href="#"><img src="one-page/images/blog/3.jpg"
                                                        alt="Paris"></a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 mt-lg-0 mt-3">
                                            <span class="before-heading fst-normal">Video Blog</span>
                                            <div class="entry-title nott">
                                                <h3 class="fw-normal"><a href="#">Kicking Off Design Party in
                                                        Style</a></h3>
                                            </div>
                                            <div class="entry-content">
                                                <a href="#" class="more-link">Read more <i
                                                        class="icon-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="entry col-md-6">
                                    <div class="grid-inner row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="entry-image">
                                                <a href="#"><img src="one-page/images/blog/4.jpg"
                                                        alt="Paris"></a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 mt-lg-0 mt-3">
                                            <span class="before-heading fst-normal">Inspiration</span>
                                            <div class="entry-title nott">
                                                <h3 class="fw-normal"><a href="#">Top Ten Signs You're a
                                                        Designer</a></h3>
                                            </div>
                                            <div class="entry-content">
                                                <a href="#" class="more-link">Read more <i
                                                        class="icon-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="topmargin-lg clearfix container">

                        <div id="oc-clients" class="owl-carousel topmargin image-carousel carousel-widget"
                            data-margin="80" data-loop="true" data-nav="false" data-autoplay="5000"
                            data-pagi="false" data-items-xs="2" data-items-sm="3" data-items-md="4"
                            data-items-lg="5" data-items-xl="6">

                            <div class="oc-item"><a href="#"><img src="images/clients/1.png"
                                        alt="Clients"></a></div>
                            <div class="oc-item"><a href="#"><img src="images/clients/2.png"
                                        alt="Clients"></a></div>
                            <div class="oc-item"><a href="#"><img src="images/clients/3.png"
                                        alt="Clients"></a></div>
                            <div class="oc-item"><a href="#"><img src="images/clients/4.png"
                                        alt="Clients"></a></div>
                            <div class="oc-item"><a href="#"><img src="images/clients/5.png"
                                        alt="Clients"></a></div>
                            <div class="oc-item"><a href="#"><img src="images/clients/6.png"
                                        alt="Clients"></a></div>
                            <div class="oc-item"><a href="#"><img src="images/clients/7.png"
                                        alt="Clients"></a></div>
                            <div class="oc-item"><a href="#"><img src="images/clients/8.png"
                                        alt="Clients"></a></div>
                            <div class="oc-item"><a href="#"><img src="images/clients/9.png"
                                        alt="Clients"></a></div>
                            <div class="oc-item"><a href="#"><img src="images/clients/10.png"
                                        alt="Clients"></a></div>

                        </div>

                    </div>

                </div> --}}

                <x-visor />

                <x-contact />

            </div>
        </section><!-- #content end -->

        <x-footer />

    </div><!-- #wrapper end -->

    <!-- Go To Top
 ============================================= -->
    <div id="gotoTop" class="icon-angle-up"></div>

    <!-- JavaScripts
 ============================================= -->
    <script src="{{ asset('js/jquery.js') }}"></script>
    <script src="{{ asset('js/plugins.min.js') }}"></script>
    <script src="https://maps.google.com/maps/api/js?key=API-KEY"></script>

    <!-- Footer Scripts
 ============================================= -->
    <script src="{{ asset('js/functions.js') }}"></script>

    <!-- SLIDER REVOLUTION 5.x SCRIPTS  -->
    <script src="include/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
    <script src="include/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
    <script src="include/rs-plugin/js/addons/revolution.addon.particles.min.js"></script>
    <script src="include/rs-plugin/js/addons/revolution.addon.typewriter.min.js"></script>
    <script src="include/rs-plugin/js/addons/revolution.addon.revealer.min.js"></script>
    <!-- SLIDER REVOLUTION EXTENSIONS  -->
    <script src="include/rs-plugin/js/extensions/revolution.extension.actions.min.js"></script>
    <script src="include/rs-plugin/js/extensions/revolution.extension.carousel.min.js"></script>
    <script src="include/rs-plugin/js/extensions/revolution.extension.kenburn.min.js"></script>
    <script src="include/rs-plugin/js/extensions/revolution.extension.layeranimation.min.js"></script>
    <script src="include/rs-plugin/js/extensions/revolution.extension.migration.min.js"></script>
    <script src="include/rs-plugin/js/extensions/revolution.extension.navigation.min.js"></script>
    <script src="include/rs-plugin/js/extensions/revolution.extension.parallax.min.js"></script>
    <script src="include/rs-plugin/js/extensions/revolution.extension.slideanims.min.js"></script>
    <script src="include/rs-plugin/js/extensions/revolution.extension.video.min.js"></script>

    <!-- ADD-ONS JS FILES -->
    <script>
        var revapi134,
            tpj;
        var $ = jQuery.noConflict();

        // $(window).on('load', function() {
        //     $("#cover").fadeOut(1750);
        // });

        (function() {
            if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",
                onLoad);
            else onLoad();

            function onLoad() {
                if (tpj === undefined) {
                    tpj = jQuery;
                    if ("off" == "on") tpj.noConflict();
                }

                if (tpj("#rev_slider_134_1").revolution == undefined) {
                    revslider_showDoubleJqueryError("#rev_slider_134_1");
                } else {
                    revapi134 = tpj("#rev_slider_134_1").show().revolution({
                        sliderType: "standard",
                        jsFileLocation: "include/rs-plugin/js/",
                        sliderLayout: "fullwidth",
                        dottedOverlay: "none",
                        delay: 9000,
                        particles: {
                            startSlide: 0,
                            endSlide: 1,
                            zIndex: "1",
                            particles: {
                                number: {
                                    value: 300
                                },
                                color: {
                                    value: "#ffffff"
                                },
                                shape: {
                                    type: "circle",
                                    stroke: {
                                        width: 1,
                                        color: "#ffffff",
                                        opacity: 0.1
                                    },
                                    image: {
                                        src: ""
                                    }
                                },
                                opacity: {
                                    value: 0.1,
                                    random: false,
                                    min: 0.25,
                                    anim: {
                                        enable: false,
                                        speed: 1,
                                        opacity_min: 0,
                                        sync: false
                                    }
                                },
                                size: {
                                    value: 1,
                                    random: true,
                                    min: 0.5,
                                    anim: {
                                        enable: false,
                                        speed: 10,
                                        size_min: 1,
                                        sync: false
                                    }
                                },
                                line_linked: {
                                    enable: true,
                                    distance: 80,
                                    color: "#ffffff",
                                    opacity: 0.1,
                                    width: 1
                                },
                                move: {
                                    enable: true,
                                    speed: 1,
                                    direction: "right",
                                    random: true,
                                    min_speed: 1,
                                    straight: false,
                                    out_mode: "out"
                                }
                            },
                            interactivity: {
                                events: {
                                    onhover: {
                                        enable: false,
                                        mode: "repulse"
                                    },
                                    onclick: {
                                        enable: true,
                                        mode: "bubble"
                                    }
                                },
                                modes: {
                                    grab: {
                                        distance: 400,
                                        line_linked: {
                                            opacity: 0.5
                                        }
                                    },
                                    bubble: {
                                        distance: 400,
                                        size: 100,
                                        opacity: 1
                                    },
                                    repulse: {
                                        distance: 75
                                    }
                                }
                            }
                        },
                        revealer: {
                            direction: "tlbr_skew",
                            color: "#ffffff",
                            duration: "1500",
                            delay: "0",
                            easing: "Power3.easeOut",
                            spinner: "2",
                            spinnerColor: "rgb(0,0,0)",
                        },
                        navigation: {
                            keyboardNavigation: "off",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation: "off",
                            mouseScrollReverse: "default",
                            onHoverStop: "off",
                            arrows: {
                                style: "uranus",
                                enable: true,
                                hide_onmobile: false,
                                hide_onleave: false,
                                tmp: '',
                                left: {
                                    h_align: "left",
                                    v_align: "center",
                                    h_offset: 20,
                                    v_offset: 50
                                },
                                right: {
                                    h_align: "right",
                                    v_align: "center",
                                    h_offset: 20,
                                    v_offset: 50
                                }
                            }
                        },
                        responsiveLevels: [1240, 1024, 778, 480],
                        visibilityLevels: [1240, 1024, 778, 480],
                        gridwidth: [1240, 1024, 778, 480],
                        gridheight: [800, 700, 600, 500],
                        lazyType: "none",
                        parallax: {
                            type: "3D",
                            origo: "slidercenter",
                            speed: 5000,
                            levels: [5, 10, 15, 20, 25, 30, 5, 0, 45, 50, 47, 48, 49, 50, 51, 55],
                            type: "3D",
                            ddd_shadow: "off",
                            ddd_bgfreeze: "on",
                            ddd_overflow: "hidden",
                            ddd_layer_overflow: "visible",
                            ddd_z_correction: 200,
                        },
                        shadow: 0,
                        spinner: "spinner5",
                        stopLoop: "off",
                        stopAfterLoops: -1,
                        stopAtSlide: -1,
                        shuffle: "off",
                        autoHeight: "off",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: false,
                        fallbacks: {
                            simplifyAll: "off",
                            nextSlideOnWindowFocus: "off",
                            disableFocusListener: false,
                        }
                    });
                } /* END OF revapi call */


                RsRevealerAddOn(tpj, revapi134,
                    "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-2'><div class='rsaddon-revealer-2' ><\/div><\/div>"
                );
                RsParticlesAddOn(revapi134);

            }; /* END OF ON LOAD FUNCTION */
        }()); /* END OF WRAPPING FUNCTION */
    </script>

</body>

</html>
