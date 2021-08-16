class Navegacion_movil {
  constructor() {
    this.abrir_menu = document.getElementById('encabezado_icono_menu');
    this.cerrar_menu = document.getElementById('cerrar_menu');
    this.menu_movil = document.getElementById('menu_movil');
  }

  obtener_abrir_menu() {
    return this.abrir_menu;
  }
  obtener_cerrar_menu() {
    return this.cerrar_menu;
  }
  abrir() {
    let css_aparece_menu = this.menu_movil.getAttribute('class');
    css_aparece_menu += ' abre';
    this.menu_movil.setAttribute('class', css_aparece_menu);
  }

  cerrar() {
    let css_menu_movil = this.menu_movil.getAttribute('class');
    let css_original = css_menu_movil.split(' ');
    this.menu_movil.setAttribute('class', css_original[0]);
  }
}
export { Navegacion_movil };
