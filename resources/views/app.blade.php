<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kosku</title>
    <!-- <link href={{ asset('storage/asset/LogoBmc.png')}} rel="icon" class="bg-white" /> -->
    @viteReactRefresh
    @vite(['resources/js/app.jsx', 'resources/css/app.css'])
    {{-- @vite(['public/build/assets/app-cc5e8bdc.js', 'resources/css/app.css']) --}}
</head>

<body class="w-screen overflow-x-hidden scroll-smooth">
    <div id="app" class=""></div>
</body>

</html>
<style>
    body::-webkit-scrollbar {
        display: none;
    }
</style>
