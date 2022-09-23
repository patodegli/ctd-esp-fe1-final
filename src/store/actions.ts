/** DOCUMENTACIÓN:
 *
 * colección de acciones para ser usadas desde los componentes
 *
 * con este archivo se busca aislar la complejidad de Redux, quitándole esa responsabilidad a los componentes
 *
 */

import { store } from ".";

/**
 *
 * resuelve la clave de la pagina previa de personajes dentro del store y dispara una accion de redux para establecerla 
 * como pagina actual
 *
 * @author: Pato Degliuomini
 * @returns {void}
 */
export const cargarPaginaPersonajesPrevia = () => {
  const state = store.getState();
  const urlClaves = Object.keys(state.paginasPersonajes || {});
  const paginaActualIndex = urlClaves.findIndex(
    (k) => k === state.paginaActual
  );

  store.dispatch({
    type: "SETEAR_PAGINA_ACTUAL",
    payload: urlClaves[paginaActualIndex - 1],
  });
};

/**
 *
 * resuelve la clave de la pagina proxima pagina de personajes dentro del store y si existe dispara una accion de redux para establecerla 
 * como pagina actual, si la actual es la ultima pagina cargada, invoca una accion para obtenerla desde la api
 *
 * @author: Pato Degliuomini
 * @returns {void}
 */
export const cargarPaginaPersonajesProxima = () => {
  const state = store.getState();
  const urlClaves = Object.keys(state.paginasPersonajes || {});
  const paginaActualIndex = urlClaves.findIndex(
    (k) => k === state.paginaActual
  );

  const esUltimaPagina = urlClaves.length - 1 === paginaActualIndex;

  if (esUltimaPagina) {
    // cargo proxima pagina porque aun no la tengo disponible
    cargarPaginaPersonajes(state.proximaPagina);
  } else {
    // muevo indice a proxima pagina
    store.dispatch({
      type: "SETEAR_PAGINA_ACTUAL",
      payload: urlClaves[paginaActualIndex + 1],
    });
  }
};

/**
 *
 * consulta la url dada y dispara acciones de redux para establecer los datos de la pagina actual, la clave de la pagina 
 * actual y la url de la api para la proxima pagina 
 *
 * @author: Pato Degliuomini
 * @param {string} url
 * @returns {void}
 */
export const cargarPaginaPersonajes = (url: string) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const datosPersonajes = data.results.map(
        (el: Record<string, unknown>) => {
          return { nombre: el.name, imgUrl: el.image, id: el.id };
        }
      );
      store.dispatch({
        type: "CARGAR_PAGINA_PERSONAJES",
        payload: {
          [url]: datosPersonajes,
        },
      });
      store.dispatch({
        type: "SETEAR_PAGINA_ACTUAL",
        payload: url,
      });
      store.dispatch({
        type: "SETEAR_PROXIMA_PAGINA",
        payload: data.info.next,
      });
    });
};
