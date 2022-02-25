import {
  DELETE_NIVEAU,
  EDIT_NIVEAU,
  GET_NIVEAU,
} from "../actions/niveau.action";
import { ADD_NIVEAU } from "../actions/niveau.action";

const initialState = {};

export default function niveauReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NIVEAU:
      return action.payload;
    case ADD_NIVEAU:
      return [action.payload, ...state];
    case DELETE_NIVEAU:
      return state.filter((niveau) => niveau.id !== action.payload.niveauId);
    case EDIT_NIVEAU:
      return state.map((niveau) => {
        if (niveau.id === action.payload.id) {
          return {
            ...niveau,
            libelle: action.payload.libelle,
          };
        } else {
          return niveau;
        }
      });
    default:
      return state;
  }
}
