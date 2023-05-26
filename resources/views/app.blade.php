<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Betany Miracle Center</title>
        @viteReactRefresh
        @vite(['resources/js/app.jsx', 'resources/css/app.css'])
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
