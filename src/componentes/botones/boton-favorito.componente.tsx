import './boton-favorito.css';

interface BotonFavoritoInterface {
    esFavorito: Boolean;
    onClick: () => void;
}

/** DOCUMENTACIÓN:
 * 
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * @author: Pato Degliuomini
 * @param {{
 *    esFavorito: boolean,
 *    onClick: function
 * }} props 
 * @returns JSX element
 * 
 */
const BotonFavorito = ({ esFavorito, onClick }: BotonFavoritoInterface) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={onClick} />
    </div>
}

export default BotonFavorito;