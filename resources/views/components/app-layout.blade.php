<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>

    {!! SEO::generate() !!}

    @viteReactRefresh
    @vite('resources/src/main.tsx')

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

                <x-section-why />

                <x-portfolio />

                <x-divider />

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
    <script src="{{ asset('assets/js/jquery.js') }}"></script>
    <script src="{{ asset('assets/js/plugins.min.js') }}"></script>
    <script src="https://maps.google.com/maps/api/js?key=API-KEY"></script>

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
