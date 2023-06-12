window.onload = function() {
    var cookiePopup = document.getElementById('cookie-popup');
    var acceptCookiesBtn = document.getElementById('accept-cookies');
    var modifyPreferencesBtn = document.getElementById('modify-preferences');
  
    acceptCookiesBtn.onclick = function() {
      localStorage.setItem('cookiesAccepted', 'true');
      cookiePopup.style.display = 'none';
    };
  
    modifyPreferencesBtn.onclick = function() {
      // Aqui se puede agregar la liga hacia el formulario de preferencias
      // para que el usuario pueda modificar sus opciones.
      alert("Función deshabilitada por el administrador - YshopOney 2023");
    };
  
    if (!localStorage.getItem('cookiesAccepted')) {
      cookiePopup.style.display = 'block';
    }

};