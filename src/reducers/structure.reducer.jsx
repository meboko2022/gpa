import {
  ADD_STRUCTURE,
  DELETE_STRUCTURE,
  EDIT_STRUCTURE,
  GET_STRUCTURES,
} from "../actions/structure.action";

const initialState = {};

export default function structureReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STRUCTURES:
      return action.payload;
    case EDIT_STRUCTURE:
      return state.map((structure) => {
        if (structure.id === action.payload.id) {
          return {
            ...structure,
            institution: action.payload.institution.id,
            libelle: action.payload.libelle,
            responsable: action.payload.responsable,
            telephone: action.payload.telephone,
           
          };
        } else {
          return structure;
        }
      });
    case ADD_STRUCTURE:
      return [action.payload, ...state];
    case DELETE_STRUCTURE:
      return state.filter(
        (structure) => structure.id !== action.payload.structureId
      );
    default:
      return state;
  }
}
