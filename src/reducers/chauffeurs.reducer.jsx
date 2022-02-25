import { ADD_CHAUFFEUR, DELETE_CHAUFFEURS, GET_CHAUFFEURS } from "../actions/chauffeurs.action";

const initialState = {};

export default function chauffeurReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHAUFFEURS:
      return action.payload;
      case DELETE_CHAUFFEURS:
        return state.filter((chauffeur) => chauffeur.id !== action.payload.chauffeurId)
      case ADD_CHAUFFEUR:
      return  [action.payload, ...state]
        default:
      return state;
  }
}
