 /* Função para abrir e fechar o menu ao clicar */
function toggleMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

  /* Fechar o menu se o usuário clicar fora dele */
  window.onclick = function(event) {
    if (!event.target.matches('svg')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}
