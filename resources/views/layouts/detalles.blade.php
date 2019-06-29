<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TVM7MTT');</script>
<!-- End Google Tag Manager -->
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-120511789-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-120511789-1');
</script>
 
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta property="og:url"           content="https://www.your-domain.com/your-page.html" />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content="BosquesSur" />
        <meta property="og:description"   content="Your description" />
        <meta property="og:image"         content="https://www.your-domain.com/path/image.jpg" />
        <meta name="description" content="Somos un equipo de trabajo especializado en el corretaje de propiedades,
        para ellos contamos con personas capacitadas y con la experiencia necesaria para orientar de la mejor manera
         a nuestros clientes. Ubicados en AVENIDA ALEMANIA N°358 PISO 2-LOS ÁNGELES">
        <meta name="Author" content="Adrian Borthomierth(adnborthomierth@gmail.com)-Eleazar Saavedra(eleazarsaavedra@gmail.com)-Saraid Mata(saramata00@gmail.com)">
        <meta http-equiv="Content-Language" content="es">
        <meta name="keywords" content=", Los ángeles, bosquessur, bosques, sur, corretaje, compra, propiedades, alquiler,
        propiedad, biobio, bio, arriendo, venta, viii región, tierras, construccion, lotes, terrenos, plantacion, forestales,
        campos, industriales, agricolas, perimetrales, chile"/>
        <meta content='Bosquessur' property='og:title'/> 
        <meta content='Bosquessur, Somos un equipo de trabajo especializado en el corretaje de propiedades,
        para ellos contamos con personas capacitadas y con la experiencia necesaria para orientar de la mejor manera a
        nuestros clientes.' property='og:description'/>
        <title>Bosque Sur</title>        
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <meta name="google-site-verification" content="BOek7ID6yF8YrBHHHURaqqxGJ4eTGovojaSm7ILpdFA" />
	    <link href="/css/bootstrap.css" rel="stylesheet" />
	    <link href="/css/font-awesome.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
	    <link href="/css/animate.min.css" rel="stylesheet" />
	    <link href="/css/owl.carousel.css" rel="stylesheet" />
	    <link href="/css/owl.transitions.css" rel="stylesheet" />
	    <link href="/css/prettyPhoto.css" rel="stylesheet" />
	    <link href="/css/main.css" rel="stylesheet" />
	    <link href="/css/responsive.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/minicarousel.css">
	    <link href="/images/ico/icono.jpg" rel="shortcut icon" />
      
    </head>
    <header class="navbar-inverse navbar-fixed-top" id="top-header">
<div class="container-fluid">
<div class="navbar-header"><!-- responsive nav button -->
    <button class="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse" type="button"><span class="sr-only">Toggle navigation</span></button><!-- /responsive nav button --><!-- logo -->
<div class="navbar-brand">
    <a  href="/">
         </a></div>
<!-- /logo --></div>
<!-- main nav -->

<nav class="collapse navbar-collapse navbar-right">

        <ul class="nav navbar-nav" id="nav">
        	<li><a  href="/">Ir a la Pagina Principal</a></li>
        </ul>

</nav>
<!-- /main nav --></div>
</header>
    <body class="homepage" id="home">
    
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TVM7MTT"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                <div class="container">
                @yield('content')
                </div>
                <div id="fb-root"></div>
               
<section id="contact-area">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="section-header">
<h2 class="section-title text-center wow fadeInDown animated" style="visibility: visible;">Contacto</h2>

<p class="text-center wow fadeInDown animated" style="visibility: visible;">Dejanos tu mensaje y nos contactaremos contigo a la brevedad</p>
</div>

<form action="enviacontacto.php" method="post" name="contact-form" class="wow fadeInDown">
<div class="col-lg-6 animated animate-from-left" style="opacity: 1; left: 0px;">
<div class="form-group"><label for="name">Tu Nombre:</label> <input class="form-control" id="name" name="nombre" placeholder="Nombre" required="" type="text" /></div>

<div class="form-group"><label for="email">Correo:</label> <input class="form-control" id="email" name="email" placeholder="E-mail" required="" type="email" /></div>

<div class="form-group"><label for="subject">Asunto:</label> <input class="form-control" id="subject" name="asunto" placeholder="Asunto" required="" type="text" /></div>
</div>

<div class="col-lg-6 animated animate-from-right" style="opacity: 1; right: 0px;">
<div class="form-group"><label for="message">Tu Mensaje:</label><textarea class="form-control" id="message" name="mensaje" placeholder="Escribe aquí" required="" rows="8"></textarea></div>
</div>

<div class="clearfix"></div>

<div class="text-center"><button class="btn btn-primary btn-lg btn-send-msg" type="submit">Enviar Mensaje</button></div>
</form>
</div>
</div>
<br />
</div>
</section>
    <footer id="footer">
	    <div class="container">
		        <div class="row">
			            <div class="col-md-4">
				            <div class="">
					                <span class="text-uppercase copyright">CORREDORA BOSQUES SUR</span>
					        <br>
					        <span class="">Corretaje de Propiedades</span>
					<br>
					<span class="">AVENIDA ALEMANIA N°358 PISO 2-LOS ÁNGELES</span>
					<br>
					<br>
					<span class="">Correo:</span>
					<br>
                    <span class=""><a href="mailto:contacto@bosquessur.cl">contacto@bosquessur.cl</a></span>
					<br/>
					<br>
					<span class="">Teléfonos:</span>
					<br>
					<span class=""><a href="tel:+56954200686">(56) 954200686</a></span>
                    <br>
                    <span class=""><a href="tel:+56973699141">(56) 973699141</a></span>
				</div>
			</div>
			<div class="col-md-4 text-center" >
				<a class="smooth-scroll" data-section="#home" href="#home">
					<img alt="" class=" infinite pulse" src="images/bs.svg" style="width:120px;" />
				</a>
            </div>
            
			<div class="col-md-4">

				<span class="copyright">CORREDORA BOSQUES SUR &copy; 2018 Derechos reservados  </span>
				<div class="text-center">
					
			</div>
		</div>
	</div>
</footer>
<footer class="text-center" style="background-color:#808080; color:#fff;">
        Sistemas Cerizeon Copyright@ 2019
</footer>

    <script src="{{ asset('js/app.js') }}"></script>
    <script src="/js/jquery.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/owl.carousel.min.js"></script>
    <script src="/js/mousescroll.js"></script>
    <script src="/js/jquery.prettyPhoto.js"></script>
    <script src="/js/jquery.isotope.min.js"></script>
    <script src="/js/jquery.inview.min.js"></script>
    <script src="/js/wow.min.js"></script>
    <script src="/js/main.js"></script>
    <script src="/js/HideCarousel.js"></script>
    
    </body>
</html>