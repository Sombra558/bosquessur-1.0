<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Bosque Sur</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>
    .MenuStyle{
        background-color:#222;
        border-color: #080808;
    }
    .MenuStyle:hover,
    .MenuStyle:focus{
        background-color:#383838;
        color:#ffffff;
    }
    .bg-page{
        background-color: #717477;
    }
    .nav-item:focus{
        background-color:#222;
        border:none;
    }
    .nav-link:hover,
    .nav-link:focus{
      
        border: none;
    }
    .TitleBarStyle{
        background-color:#222;
        color: #ffffff;
        border-color:#222;
    }
    .text-white a:hover{
        text-decoration: none;
        font-weight: bold;
    }
    .bg-totales{
        background-color:#1da302;
    }
    .bg-disponibles{
        background-color:#616461;
    }
    .bg-vendidos{
        background-color:#5641ce;
    }
    .bg-provincias{
        background-color:#e9fa02;
    }
    .bg-comunas{
        background-color:#02e9fa;
    }
    .bg-sitios{
        background-color: #81db0a;
     
    }
    .bg-parcelas{
        background-color :#db6f0a;
    }
    .bg-plataciones{
        background-color: #065f0e;
    }
    .bg-campos{
        background-color: #64075c;
    }
    .bg-lotes{
        background-color: #004ddd;
    }
    .bg-fundos{
        background-color: #a1031d;
    }
    .bg-industriales{
        background-color: #085d72;
    }
    .bg-casas{
        background-color: #ff7809;
    }
    .bg-dcasas{
        background-color: #318cc0;
    }
    .bg-vcasas{
        background-color: #31c044;
    }
    </style>
</head>
<body class="bg-page" >
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-dark  shadow-sm" style="background-color: #222;>
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                   Ir a la Pagina Principal
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} {{ Auth::user()->lastname }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div>
  
</body>
</html>
