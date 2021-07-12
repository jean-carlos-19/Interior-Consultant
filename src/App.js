const abrir_menu = document.getElementById("encabezado_icono_menu");
const cerrar_menu = document.getElementById("cerrar_menu");
const menu_movil = document.getElementById("menu_movil");

abrir_menu.addEventListener("click", () => {
  let css_aparece_menu = menu_movil.getAttribute("class");
  css_aparece_menu += " abre";
  menu_movil.setAttribute("class", css_aparece_menu);
});

cerrar_menu.addEventListener("click", () => {
  let css_menu_movil = menu_movil.getAttribute("class");
  let css_original = css_menu_movil.split(" ");
  menu_movil.setAttribute("class", css_original[0]);
});
