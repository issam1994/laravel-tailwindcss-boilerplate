<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{$attributes['title']}}</title>
    <!-- styles -->
    <link rel="stylesheet" href="{{mix('/client/css/main.css')}}">
</head>

<body class="antialiased">
    {{$slot}}
    {{-- scripts --}}
    {{-- jquery  --}}
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    {{-- custom script  --}}
    <script src="{{mix('/client/js/main.js')}}"></script>
</body>

</html>