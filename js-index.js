// Flecha GoTop
const botonScrollTop = document.getElementById("btn-scrollTop")
botonScrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Cambiar de modo oscuro-claro
document.getElementById('boton-cambiar').addEventListener('change', function() {
  var contenedorFlecha = document.getElementById('contenedor-flecha');
  var bx = document.getElementById('bx');
  var navbar = document.getElementById('navbar');
  var navbarNav = document.getElementById('navbar-nav');
  var navLink = document.getElementsByClassName('nav-link');
  var navItem = document.getElementsByClassName('nav-item');
  var navbarToggler = document.getElementById('navbar-toggler');
  var navbarTogglerIcon = document.getElementById('navbar-toggler-icon');
  var btnCambiarClick = document.getElementById('btn-cambiar-click');
  var imgLogo = document.getElementById('img-logo')
  var mainHero = document.getElementById('main-hero');
  var mainHeroIzquierda = document.getElementById('main-hero__izquierda')
  var containerTitulo = document.getElementById('container__titulo');
  var containerParrafo = document.getElementById('container__parrafo');
  var containerBoton = document.getElementById('container__boton');
  var contenedorNewsletter = document.getElementById('contenedor-newsletter');
  var tituloNewsletter = document.getElementById('titulo__newsletter');
  var parrafoNewsletter = document.getElementById('parrafo__newsletter');
  var campoNewsletter = document.getElementById('campo_newsletter');
  var slider = document.getElementById('slider');
  var sliderTitulo = document.getElementById('slider__titulo');
  var footer = document.getElementById('footer');
  var footerTexto = document.getElementsByClassName('footer-texto');
  var imgLogoFooter = document.getElementById('img-logo-footer');

  for (var i = 0; i < navLink.length; i++) {
    for(var x = 0; x < navItem.length; x++) {
      for(var z = 0; z < footerTexto.length;z++) {
      if (this.checked) {
        contenedorFlecha.style.backgroundColor = "white";
        contenedorFlecha.style.borderColor = "black";
        bx.style.color = "black";
        navbar.style.backgroundColor = "white";
        navbarNav.style.backgroundColor = "white";
        navLink[i].style.setProperty('color', 'black', 'important');
        navItem[x].style.borderBottomColor = "black";
        navbarToggler.style.borderColor = "black";
        navbarTogglerIcon.classList.remove("navbar-toggler-icon");
        navbarTogglerIcon.classList.add("navbar-toggler-icon2");
        btnCambiarClick.style.backgroundImage = "url('./assets/modo-claro.png')";
        imgLogo.src = "./assets/logoDark.png";
        mainHero.style.borderBottomColor = "black";
        mainHero.style.backgroundColor = "white";
        mainHeroIzquierda.style.backgroundColor = "white";
        containerTitulo.style.setProperty('color', 'black', 'important');
        containerParrafo.style.setProperty('color', 'black', 'important');
        containerBoton.style.backgroundColor = "black";
        containerBoton.style.color = "white";
        contenedorNewsletter.style.backgroundColor = "white";
        tituloNewsletter.style.color = "black";
        parrafoNewsletter.style.color = "black";
        campoNewsletter.style.backgroundColor = "black";
        campoNewsletter.style.color = "white";
        slider.style.backgroundColor = "white";
        sliderTitulo.style.backgroundColor = "black";
        sliderTitulo.style.color = "white";
        footer.style.backgroundColor = "white";
        footerTexto[z].style.setProperty('color','black','important');
        imgLogoFooter.src = "./assets/logoDark.png";
      } else {
        contenedorFlecha.style.backgroundColor = "";
        contenedorFlecha.style.borderColor = "";
        bx.style.color = "";
        navbar.style.backgroundColor = ""; 
        navbarNav.style.backgroundColor = "";
        navLink[i].style.color = "";
        navItem[x].style.borderBottomColor = "";
        navbarToggler.style.borderColor = "";
        navbarTogglerIcon.classList.remove("navbar-toggler-icon2");
        navbarTogglerIcon.classList.add("navbar-toggler-icon");
        navbarTogglerIcon.style.backgroundImage = "";
        btnCambiarClick.style.backgroundImage = "url('./assets/modo-oscuro.png')";
        imgLogo.src = "./assets/logo.png";
        mainHero.style.borderBottomColor = "";
        mainHero.style.backgroundColor = "";
        mainHeroIzquierda.style.backgroundColor = "";
        containerTitulo.style.color = "";
        containerParrafo.style.color = "";
        containerBoton.style.backgroundColor = "";
        containerBoton.style.color = "";
        contenedorNewsletter.style.backgroundColor = "";
        tituloNewsletter.style.color = "";
        parrafoNewsletter.style.color = "";
        campoNewsletter.style.backgroundColor = "";
        campoNewsletter.style.color = "";
        slider.style.backgroundColor = "";
        sliderTitulo.style.backgroundColor = "";
        sliderTitulo.style.color = "";
        footer.style.backgroundColor = "";
        footerTexto[z].style.color = "";
        imgLogoFooter.src = "./assets/logo.png";
      }
      }
    }
  }
});