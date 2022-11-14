     <!-- 1. Section Why Choose Us
    ============================================= -->
     <div id="why-section" class="section bg-color-light my-0">
         <div class="mw-md topmargin bottommargin container text-center">

             <h2 class="display-4 fw-normal">{{ reset($title) }} <span data-animate="svg-underline-animated"
                     class="svg-underline nocolor"><span>{{ end($title) }}</span></span> </h2>

             <div class="clear"></div>

             <!-- Features Area -->
             <div class="row col-mb-50 justify-content-center mb-0 mt-5">

                 @foreach ($items as $item)
                     <div class="col-sm-6 col-lg-4">
                         <div class="feature-box fbox-center fbox-outline fbox-lg fbox-effect fbox-light">
                             <div class="fbox-icon" data-animate="pulse infinite">
                                 <a href="{{ $item['href'] }}"><i class="{{ $item['icon'] }}"></i></a>
                             </div>
                             <div class="fbox-content">
                                 <h2 class="nott fw-medium h4 mb-4">{{ $item['title'] }}</h2>
                                 <p class="px-3">{{ $item['description'] }}</p>
                             </div>
                         </div>
                     </div>
                 @endforeach

             </div>

         </div>
     </div> <!-- Section End -->
