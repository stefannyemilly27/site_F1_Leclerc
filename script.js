//* PÁGINAS DENTRO DE PÁGINAS *//
function mostrarPagina(id) {
  const paginas = document.querySelectorAll(".pagina");

  if (!paginas.length) return; 

  paginas.forEach(p => p.classList.remove("ativa"));

  const pagina = document.getElementById(id);
  if (pagina) pagina.classList.add("ativa");
}
