<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>
    {!! SEO::generate() !!}
    @viteReactRefresh
    @vite('resources/src/main-products.tsx')

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

<body>

    {{ $slot }}

</body>

</html>
