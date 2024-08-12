<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>

    {!! SEO::generate() !!}

    @viteReactRefresh
    @if (Request::is('/'))
        @vite('resources/src/main.tsx')
    @elseif (Request::is('products'))
        @vite('resources/src/main-products.tsx')
    @else
        @vite('resources/src/main.tsx')
    @endif

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Stylesheets
 ============================================= -->

    <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Raleway:300,400,500,600,700,800,900|Poppins:700|Oswald:300&display=swap"
        rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.css') }}" type="text/css" />
    <link rel="stylesheet" href="{{ asset('assets/style.css') }}" type="text/css" />

    <!-- One Page Module Specific Stylesheet -->
    <link rel="stylesheet" href="{{ asset('assets/one-page/onepage.css') }}" type="text/css" />
    <!-- / -->

    <link rel="stylesheet" href="{{ asset('assets/css/dark.css') }}" type="text/css" />
    <link rel="stylesheet" href="{{ asset('assets/css/font-icons.css') }}" type="text/css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css"
        type="text/css" />
    <link rel="stylesheet" href="{{ asset('assets/one-page/css/et-line.css') }}" type="text/css" />
    <link rel="stylesheet" href="{{ asset('assets/css/animate.css') }}" type="text/css" />
    <link rel="stylesheet" href="{{ asset('assets/css/magnific-popup.css') }}" type="text/css" />

    <link rel="stylesheet" href="{{ asset('assets/one-page/css/fonts.css') }}" type="text/css" />

    <link rel="stylesheet" href="{{ asset('assets/css/custom.css') }}" type="text/css" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- SLIDER REVOLUTION 5.x CSS SETTINGS -->
    <link rel="stylesheet" type="text/css"
        href="{{ asset('assets/include/rs-plugin/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css') }}">
    <link rel="stylesheet" type="text/css"
        href="{{ asset('assets/include/rs-plugin/fonts/font-awesome/css/font-awesome.css') }}">

    <link rel="stylesheet" type="text/css" href="{{ asset('assets/include/rs-plugin/css/addons/typewriter.css') }}">
    <link rel="stylesheet" type="text/css"
        href="{{ asset('assets/include/rs-plugin/css/addons/revolution.addon.revealer.css') }}">
    <link rel="stylesheet" type="text/css"
        href="{{ asset('assets/include/rs-plugin/css/addons/revolution.addon.revealer.preloaders.css') }}">

    <link rel="stylesheet" type="text/css" href="{{ asset('assets/include/rs-plugin/css/settings.css') }}"
        media="screen" />
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/include/rs-plugin/css/layers.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/include/rs-plugin/css/navigation.css') }}">

    <!-- ADD-ONS CSS FILES -->
    <link rel="stylesheet" type="text/css"
        href="{{ asset('assets/include/rs-plugin/css/addons/revolution.addon.particles.css') }}">

    @livewireStyles

    <!-- Document Title
 ============================================= -->


</head>

<div id="cover" class="css3-spinner">
    <div class="css3-spinner-bounce1"></div>
    <div class="css3-spinner-bounce2"></div>
    <div class="css3-spinner-bounce3"></div>
</div>

<body class="stretched side-push-panel">

    <div class="body-overlay"></div>

    <!-- Document Wrapper
 ============================================= -->
    <div id="wrapper" class="clearfix">

        {{ $slot }}

    </div><!-- #wrapper end -->

    <!-- Go To Top
 ============================================= -->
    <div id="gotoTop" class="icon-angle-up"></div>

    <!-- JavaScripts
 ============================================= -->
    <script src="{{ asset('assets/js/jquery.js') }}"></script>
    <script src="{{ asset('assets/js/plugins.min.js') }}"></script>
    {{-- <script src="https://maps.google.com/maps/api/js?key=API-KEY"></script> --}}

    <!-- Footer Scripts
 ============================================= -->
    <script src="{{ asset('assets/js/functions.js') }}"></script>

    <!-- SLIDER REVOLUTION 5.x SCRIPTS  -->
    <script src="{{ asset('assets/include/rs-plugin/js/jquery.themepunch.tools.min.js') }}"></script>
    <script src="{{ asset('assets/include/rs-plugin/js/jquery.themepunch.revolution.min.js') }}"></script>
    <script src="{{ asset('assets/include/rs-plugin/js/addons/revolution.addon.particles.min.js') }}"></script>
    <script src="{{ asset('assets/include/rs-plugin/js/addons/revolution.addon.typewriter.min.js') }}"></script>
    <script src="{{ asset('assets/include/rs-plugin/js/addons/revolution.addon.revealer.min.js') }}"></script>
    <!-- SLIDER REVOLUTION EXTENSIONS  -->
    <script src="{{ asset('assets/include/rs-plugin/js/extensions/revolution.extension.actions.min.js') }}"></script>
    <script src="{{ asset('assets/include/rs-plugin/js/extensions/revolution.extension.carousel.min.js') }}"></script>
    <script src="{{ asset('assets/include/rs-plugin/js/extensions/revolution.extension.kenburn.min.js') }}"></script>
    <script src="{{ asset('assets/include/rs-plugin/js/extensions/revolution.extension.layeranimation.min.js') }}">
    </script>
    <script src="{{ asset('assets/include/rs-plugin/js/extensions/revolution.extension.migration.min.js') }}"></script>
    <script src="{{ asset('assets/include/rs-plugin/js/extensions/revolution.extension.navigation.min.js') }}"></script>
    <script src="{{ asset('assets/include/rs-plugin/js/extensions/revolution.extension.parallax.min.js') }}"></script>
    <script src="{{ asset('assets/include/rs-plugin/js/extensions/revolution.extension.slideanims.min.js') }}"></script>
    <script src="{{ asset('assets/include/rs-plugin/js/extensions/revolution.extension.video.min.js') }}"></script>

    <!-- ADD-ONS JS FILES -->
    <script>
        var revapi134,
            tpj;
        var $ = jQuery.noConflict();

        $(window).on('load', function() {
            $("#cover").fadeOut(1750);
        });

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
                        jsFileLocation: "assets/include/rs-plugin/js/",
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
                                    width: 2
                                },
                                move: {
                                    enable: true,
                                    speed: 2,
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
                                        enable: true,
                                        mode: "repulse"
                                    },
                                    onclick: {
                                        enable: false,
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
                                        size: 10,
                                        opacity: 1
                                    },
                                    repulse: {
                                        distance: 15
                                    }
                                }
                            }
                        },
                        revealer: {
                            direction: "tlbr_skew",
                            color: "#ffffff",
                            duration: "1500",
                            delay: "0",
                            easing: "Power3.easeOut"
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


                RsRevealerAddOn(tpj, revapi134);
                RsParticlesAddOn(revapi134);

            }; /* END OF ON LOAD FUNCTION */
        }()); /* END OF WRAPPING FUNCTION */
    </script>

    @livewireScripts


</body>

</html>
