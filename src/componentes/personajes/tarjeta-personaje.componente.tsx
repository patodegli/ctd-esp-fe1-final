import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/** DOCUMENTACIÓN:
 * 
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 *  @author: Pato Degliuomini
 *  @param {
 *    url: string,
 *    nombre: string,
 *    favorito: boolean,
 *    onClick: function
 *    
 * } props 
 * @returns JSX element
 * 
 */
const TarjetaPersonaje = ({ url, nombre, favorito, onClick }: { url: string, nombre: string, favorito: boolean, onClick: () => void }) => {

    return <div className="tarjeta-personaje">
        <img src={url} alt={nombre} />
        <div className="tarjeta-personaje-body">
            <span>{nombre}</span>
            <BotonFavorito esFavorito={favorito} onClick={onClick} />
        </div>
    </div>
}

export default TarjetaPersonaje;