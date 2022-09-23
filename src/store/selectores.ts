import { StateInterface } from ".";

export const SEL_TODOS_PERSONAJES = (state: StateInterface) => {
    if(state.paginasPersonajes === null || state.paginaActual === "") return []

    const personajes = state.paginasPersonajes[state.paginaActual]
    return state.filtro !== ""
    ? personajes.filter(el => el.nombre.toLowerCase().includes(state.filtro.toLowerCase()))
    : personajes
    
}
export const SEL_PERSONAJES_FAVORITOS = (state: StateInterface) => {
    const personajes = Object.values(state.paginasPersonajes || {}).flatMap(p => p)
    return personajes.filter(el => el.favorito)
}

export const URL_PROXIMA_PAGINA = (state: StateInterface) => state.proximaPagina
export const URL_PAGINA_ACTUAL = (state: StateInterface) => state.paginaActual
export const ES_PRIMERA_PAGINA = (state: StateInterface) => {
    const urlClaves = Object.keys(state.paginasPersonajes || {})
    const paginaActualIndex = urlClaves.findIndex(k => k === state.paginaActual)
    return paginaActualIndex === 0
}