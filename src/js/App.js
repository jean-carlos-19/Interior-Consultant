(() => {
  'use strict';
  const e = new (class {
    constructor() {
      (this.abrir_menu = document.getElementById('encabezado_icono_menu')),
        (this.cerrar_menu = document.getElementById('cerrar_menu')),
        (this.menu_movil = document.getElementById('menu_movil'));
    }
    obtener_abrir_menu() {
      return this.abrir_menu;
    }
    obtener_cerrar_menu() {
      return this.cerrar_menu;
    }
    abrir() {
      let e = this.menu_movil.getAttribute('class');
      (e += ' abre'), this.menu_movil.setAttribute('class', e);
    }
    cerrar() {
      let e = this.menu_movil.getAttribute('class').split(' ');
      this.menu_movil.setAttribute('class', e[0]);
    }
  })();
  e.obtener_abrir_menu().addEventListener('click', () => {
    e.abrir();
  }),
    e.obtener_cerrar_menu().addEventListener('click', () => {
      e.cerrar();
    });
})();
