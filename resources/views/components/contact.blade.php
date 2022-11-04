<div id="section-contact" class="page-section">

    <div class="container text-center">

        <div class="heading-block center">
            <h2>Contáctanos</h2>
            <span>Visítanos en nuestro local o escribenos que estaremos gustosos en atenderte</span>
        </div>

    </div>


    <div class="row bottommargin-lg align-items-stretch mx-0">
        <div class="col-lg-6 col-md-6 d-none d-md-block px-0">
            {{-- <div class="gmap h-100" data-address="Melbourne, Australia" data-maptype="ROADMAP"
                data-zoom="14"
                data-markers='[{ address: "Melbourne, Australia", html: "Melbourne, Australia", icon:{ image: "one-page/images/icons/map-icon-red.png", iconsize: [32, 32], iconanchor: [14,44] } }]'
                data-styles='[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":"-100"},{"lightness":"30"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"gamma":"0.00"},{"lightness":"74"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"lightness":"3"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]'>
            </div> --}}
            <!-- Google Maps - Settings on footer -->
            <div class="gmap h-100">
                <iframe width="100%" height="50%"
                    src="https://maps.google.com/maps?q={{ $coordinates }}&t=&z=20&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    style="filter: grayscale(0.8) contrast(1) opacity(0.8)"></iframe>
            </div>
        </div>
        <div class="col-lg-6 col-md-6" style="background-color: #F5F5F5;">
            <div class="col-padding">
                <h2 class="font-body fw-normal ls1">Nuestra sede</h2>

                <div style="font-size: 18px; line-height: 1.7;">
                    @foreach ($addresses as $address)
                        <address style="line-height: 1.7;">
                            <strong>{{ $address['description'] }}</strong><br>
                            {{ $address['address'] }}<br>
                        </address>

                        <div class="clear topmargin-sm"></div>
                    @endforeach
                    {{-- <address style="line-height: 1.7;">
                        <strong>North America:</strong><br>
                        795 Folsom Ave, Suite 600<br>
                        San Francisco, CA 94107<br>
                    </address>

                    <div class="clear topmargin-sm"></div> --}}

                    {{-- <address style="line-height: 1.7;">
                        <strong>Europe:</strong><br>
                        795 Folsom Ave, Suite 600<br>
                        San Francisco, CA 94107<br>
                    </address>

                    <div class="clear topmargin"></div> --}}

                    {{-- <abbr title="Phone Number"><strong>Phone:</strong></abbr> (1) 8547 632521<br>
                    <abbr title="Fax"><strong>Fax:</strong></abbr> (1) 11 4752 1433<br>
                    <abbr title="Email Address"><strong>Email:</strong></abbr> info@canvas.com --}}
                    @foreach ($contacts as $contact)
                        <abbr title="{{ $contact['title'] }}"><strong>{{ $contact['title'] }}: </strong></abbr>{{ $contact['description'] }}<br>
                    @endforeach
                </div>
            </div>
        </div>
    </div>

    <div class="clearfix container">

        <div class="topmargin mx-auto" style="max-width: 850px;">

            <div class="form-widget">

                <div class="form-result"></div>

                <form class="row mb-0" id="template-contactform" name="template-contactform" action="include/form.php"
                    method="post">

                    <div class="form-process">
                        <div class="css3-spinner">
                            <div class="css3-spinner-scale-ripple">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-4">
                        <input type="text" id="template-contactform-name" name="template-contactform-name"
                            value="" class="sm-form-control border-form-control required" placeholder="Nombre" />
                    </div>
                    <div class="col-md-6 mb-4">
                        <input type="email" id="template-contactform-email" name="template-contactform-email"
                            value="" class="required email sm-form-control border-form-control"
                            placeholder="Dirección de Email" />
                    </div>

                    <div class="w-100"></div>

                    <div class="col-md-4 mb-4">
                        <input type="text" id="template-contactform-phone" name="template-contactform-phone"
                            value="" class="sm-form-control border-form-control" placeholder="Teléfono" />
                    </div>

                    <div class="col-md-8 mb-4">
                        <input type="text" id="template-contactform-subject" name="subject" value=""
                            class="required sm-form-control border-form-control" placeholder="Asunto" />
                    </div>

                    <div class="w-100"></div>

                    <div class="col-12 mb-4">
                        <textarea class="required sm-form-control border-form-control" id="template-contactform-message"
                            name="template-contactform-message" rows="7" cols="30" placeholder="Escriba su mensaje"></textarea>
                    </div>

                    <div class="col-12 center mb-4">
                        <button class="button button-border button-circle fw-medium ms-0 topmargin-sm" type="submit"
                            id="template-contactform-submit" name="template-contactform-submit" value="submit">Enviar mensaje</button>
                        <br>
                        <small style="display: block; font-size: 13px; margin-top: 15px;">Le contestaremos lo más pronto posible. Gracias</small>
                    </div>

                    <div class="w-100"></div>

                    <div class="col-12 d-none">
                        <input type="text" id="template-contactform-botcheck" name="template-contactform-botcheck"
                            value="" class="sm-form-control" />
                    </div>

                    <input type="hidden" name="prefix" value="template-contactform-">

                </form>

            </div>

        </div>

    </div>

</div>
