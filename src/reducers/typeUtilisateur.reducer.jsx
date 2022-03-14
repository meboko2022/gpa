import { GET_TYPES_UTILISATEUR, ADD_TYPE_UTILISATEUR, EDIT_TYPE_UTILISATEUR, DELETE_TYPE_UTILISATEUR } from "../actions/typeUtilisateur.action";

const initialState = {};

export default function typeUtilisateurReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TYPES_UTILISATEUR:
            return action.payload;
        case ADD_TYPE_UTILISATEUR:
            return [action.payload, ...state];
        case DELETE_TYPE_UTILISATEUR:
            return state.filter((typeUtilisateur) => typeUtilisateur.id !== action.payload.typeUtilisateurId);
        case EDIT_TYPE_UTILISATEUR:
            return state.map((typeUtilisateur) => {
                if (typeUtilisateur.id === action.payload.id) {
                    return {
                      ...typeUtilisateur,
                      libelle: action.payload.libelle,
                    };
                } else {
                    return typeUtilisateur;
                  }
                });
              default:
                return state;
            }
          }
          