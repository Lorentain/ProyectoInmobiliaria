// Flecha GoTop
const botonScrollTop = document.getElementById("btn-scrollTop")
botonScrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


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
  var footer = document.getElementById('footer');
  var footerTexto = document.getElementsByClassName('footer-texto');
  var imgLogoFooter = document.getElementById('img-logo-footer');

  if (this.checked) {
      contenedorFlecha.style.backgroundColor = "white";
      contenedorFlecha.style.borderColor = "black";
      bx.style.color = "black";
      navbar.style.backgroundColor = "white";
      navbarNav.style.backgroundColor = "white";
      for (var i = 0; i < navLink.length; i++) {
          navLink[i].style.setProperty('color', 'black', 'important');
      }
      for (var i = 0; i < navItem.length; i++) {
          navItem[i].style.borderBottomColor = "black";
      }
      navbarToggler.style.borderColor = "black";
      navbarTogglerIcon.classList.remove("navbar-toggler-icon");
      navbarTogglerIcon.classList.add("navbar-toggler-icon2");
      btnCambiarClick.style.backgroundImage = "url('./assets/modo-claro.png')";
      imgLogo.src = "./assets/logoDark.png";
      footer.style.backgroundColor = "white";
      imgLogoFooter.src = "./assets/logoDark.png";
      for (var i = 0; i < footerTexto.length; i++) {
          footerTexto[i].style.setProperty('color','black','important');
      }
  } else {
      contenedorFlecha.style.backgroundColor = "";
      contenedorFlecha.style.borderColor = "";
      bx.style.color = "";
      navbar.style.backgroundColor = ""; 
      navbarNav.style.backgroundColor = "";
      for (var i = 0; i < navLink.length; i++) {
          navLink[i].style.color = "";
      }
      for (var i = 0; i < navItem.length; i++) {
          navItem[i].style.borderBottomColor = "";
      }
      navbarToggler.style.borderColor = "";
      navbarTogglerIcon.classList.remove("navbar-toggler-icon2");
      navbarTogglerIcon.classList.add("navbar-toggler-icon");
      navbarTogglerIcon.style.backgroundImage = "";
      btnCambiarClick.style.backgroundImage = "url('./assets/modo-oscuro.png')";
      imgLogo.src = "./assets/logo.png";
      footer.style.backgroundColor = "";
      imgLogoFooter.src = "./assets/logo.png";
      for (var i = 0; i < footerTexto.length; i++) {
          footerTexto[i].style.color = "";
      }
  }
});
