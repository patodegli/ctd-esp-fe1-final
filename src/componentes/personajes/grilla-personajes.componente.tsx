import { store, useSelector } from '../../store';
import { SEL_PERSONAJES_FAVORITOS, SEL_TODOS_PERSONAJES } from '../../store/selectores';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/** DOCUMENTACIÓN:
 * 
 * Grilla de personajes para la pagina de inicio
 * 
 @author: Pato Degliuomini
 * @param {
 *    soloFavoritos: boolean
 * } props 
 * @returns JSX element
 * 
 */
const GrillaPersonajes = ({ soloFavoritos }: { soloFavoritos?: boolean }) => {
    const personajesArray = useSelector(soloFavoritos ? SEL_PERSONAJES_FAVORITOS : SEL_TODOS_PERSONAJES)

    console.log(personajesArray);


    return <div className="grilla-personajes">
        {personajesArray.map((el) => {
            return <TarjetaPersonaje key={el.imgUrl} url={el.imgUrl} nombre={el.nombre} favorito={el.favorito} onClick={() => {
                store.dispatch({
                    type: "MARCAR_FAVORITO", payload: el.id
                })
            }} />
        })}
    </div>
}

export default GrillaPersonajes;