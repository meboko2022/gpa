import {
  ADD_INSTITUTION,
  DELETE_INSTITUTION,
  EDIT_INSTITUTION,
  GET_INSTITUTION,
} from "../actions/institutions.action";

const initialState = {};

export default function institutionsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INSTITUTION:
      return action.payload;
    case EDIT_INSTITUTION:
      return state.map((institution) => {
        if (institution.id === action.payload.id) {
          return {
            ...institution,
            libelle: action.payload.libelle,
            niveau: action.payload.niveau,
            nomChefParc: action.payload.nomChefParc,
            prenomChefParc: action.payload.prenomChefParc,
            emailChefParc: action.payload.emailChefParc,
           
          };
        } else {
          return institution;
        }
      });
    case ADD_INSTITUTION:
      return [action.payload, ...state];
    case DELETE_INSTITUTION:
      return state.filter(
        (institution) => institution.id !== action.payload.institutionId
      );
    default:
      return state;
  }
}
