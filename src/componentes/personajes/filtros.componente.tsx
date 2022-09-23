import { store } from '../../store';
import './filtros.css';

const Filtros = () => {

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" id="filtro_nombre" onChange={(e) => {
            store.dispatch({
                type: "FILTRO_PERSONAJES", payload: e.target.value
            })
        }} />
    </div>
}

export default Filtros;