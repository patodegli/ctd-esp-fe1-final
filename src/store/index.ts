import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

// Importamos applyMiddleware de Redux, para poder agregar Thunk o Saga como Middleware
import { createStore, applyMiddleware } from "redux";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";

interface Personaje {
  id: string;
  imgUrl: string;
  nombre: string;
  favorito: boolean;
}

export interface StateInterface {
  filtro: string;
  paginasPersonajes: Record<string, Personaje[]> | null;
  paginaActual: string;
  proximaPagina: string
}
const initialState: StateInterface = {
  filtro: "",
  paginasPersonajes: null,
  paginaActual: "",
  proximaPagina: ""
};

interface actionInterface {
  type: string;
  payload: unknown;
}

const rootReducer = (state = initialState, action: actionInterface) => {
  switch (action.type) {
    case "CARGAR_PERSONAJES":
      return {
        ...state,
        personajes: action.payload as Personaje[],
      };
    case "MARCAR_FAVORITO":
      const nuevosPersonajes = [...state.paginasPersonajes![state.paginaActual]];
      const idx = nuevosPersonajes.findIndex((el) => el.id === action.payload);
      nuevosPersonajes[idx] = {
        ...nuevosPersonajes[idx],
        favorito: !nuevosPersonajes[idx].favorito,
      };
      return {
        ...state,
        paginasPersonajes: {
          ...state.paginasPersonajes,
          [state.paginaActual]: nuevosPersonajes
        } 
      };
    case "FILTRO_PERSONAJES":
      return {
        ...state,
        filtro: action.payload as string,
      };
    case "CARGAR_PAGINA_PERSONAJES":
      return {
        ...state,
        paginasPersonajes: {
          ...state.paginasPersonajes,
          ...action.payload as Record<string, Personaje[]>
        }, 
      };
    case "SETEAR_PAGINA_ACTUAL":
      return {
        ...state,
        paginaActual: action.payload as string
      };
    case "SETEAR_PROXIMA_PAGINA":
      return {
        ...state,
        proximaPagina: action.payload as string || ""
      }

    default:
      return state;
  }
};

export type IRootState = ReturnType<typeof rootReducer>;

// Tipamos el hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Aqui aplicaremos los middlewares
);
