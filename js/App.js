import { Navegacion_movil } from './Navegacion_movil';

const navegacion_movil = new Navegacion_movil();
navegacion_movil.obtener_abrir_menu().addEventListener('click', () => {
  navegacion_movil.abrir();
});
navegacion_movil.obtener_cerrar_menu().addEventListener('click', () => {
  navegacion_movil.cerrar();
});
