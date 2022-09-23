import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { store } from "../store";
/**
 * Esta es la pagina principal. Aquí ve el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={() => {
                // limpio input
                // @ts-ignore
                document.querySelector("#filtro_nombre").value = ""

                // limpio filtro en Redux
                store.dispatch({
                    type: "FILTRO_PERSONAJES", payload: ""
                })
            }}>Limpiar filtro</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio