const ABRIRIR_MENU = document.getElementById("abrir_menu");
const CERRAR_MENU = document.getElementById("cerrar_menu");
const CONTENEDOR_MENU = document.getElementById("contenedor_menu");

ABRIRIR_MENU.addEventListener("click", () => {
  let css_aparece_menu = CONTENEDOR_MENU.getAttribute("class");
  css_aparece_menu += " abre";
  CONTENEDOR_MENU.setAttribute("class", css_aparece_menu);
});

CERRAR_MENU.addEventListener("click", () => {
  let css_contenedor_menu = CONTENEDOR_MENU.getAttribute("class");
  let css_original = css_contenedor_menu.split(" ");
  CONTENEDOR_MENU.setAttribute("class", css_original[0]);
});
