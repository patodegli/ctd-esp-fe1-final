import { useSelector } from '../../store';
import { cargarPaginaPersonajesPrevia, cargarPaginaPersonajesProxima } from '../../store/actions';
import { ES_PRIMERA_PAGINA, URL_PROXIMA_PAGINA } from '../../store/selectores';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
  const url = useSelector(URL_PROXIMA_PAGINA)
  const hayMasPaginas = url !== ""
  const esPrimerPagina = useSelector(ES_PRIMERA_PAGINA)

  return <div className="paginacion">
    <button disabled={esPrimerPagina} className={"primary"} onClick={() => {
      cargarPaginaPersonajesPrevia()
    }}>Anterior</button>
    <button disabled={!hayMasPaginas} className={"primary"} onClick={() => {
      cargarPaginaPersonajesProxima()
    }}>Siguiente</button>
  </div>
}

export default Paginacion;