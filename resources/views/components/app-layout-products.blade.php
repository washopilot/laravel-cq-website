<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>

    {!! SEO::generate() !!}

    @viteReactRefresh
    @vite('resources/src/main-products.tsx')

    <meta name="csrf-token" content="{{ csrf_token() }}">




</head>


<body class="stretched side-push-panel">


    <div class="body-overlay"></div>

    <!-- Document Wrapper
 ============================================= -->
    <div id="wrapper" class="clearfix">

        {{ $slot }}

    </div><!-- #wrapper end -->



</body>

</html>
