import { ADD_UTILISATEUR, DELETE_UTILISATEUR, EDIT_UTILISATEUR, GET_UTILISATEURS } from "../actions/utilisateur.action";

const initialState = {};

export default function utilisateurReducer(state = initialState, action) {
  switch (action.type) {
    case GET_UTILISATEURS:
      return action.payload;
      case ADD_UTILISATEUR: 
      return [action.payload, ...state];
   
      case EDIT_UTILISATEUR: 
      return state.map((utilisateur) => {
        if(utilisateur.id === action.payload.id){
          return{
            ...utilisateur,
            nom: action.payload.nom,
            prenom: action.payload.prenom,
            telephone: action.payload.telephone,
            statutCompte: action.payload.statutCompte,
            login: action.payload.login,
            motDePasse: action.payload.motDePasse,
            structure: action.payload.motDePasse
          }
        }
        else{
          return utilisateur
        }
      })

      case DELETE_UTILISATEUR:
        return state.filter((utilisateur) => utilisateur.id !== action.payload.utilisateurId)
      default:
      return state;
  }
}
