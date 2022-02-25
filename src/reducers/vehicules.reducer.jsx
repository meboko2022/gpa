import { ADD_VEHICULES, DELETE_VEHICULE, EDIT_VEHICULE, GET_VEHICULES } from "../actions/vehicules.action";

const initialState = {};

export default function vehiculesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VEHICULES:
      return action.payload;
      case ADD_VEHICULES: 
      return [action.payload, ...state];
   
      case EDIT_VEHICULE: 
      return state.map((vehicule) => {
        if(vehicule.id === action.payload.id){
          return{
            ...vehicule,
            etatActuel: action.payload.etatActuel,
            immatriculation: action.payload.immatriculation,
            institution: action.payload.institution,
            marque: action.payload.marque,
            modele: action.payload.modele
          }
        }
        else{
          return vehicule
        }
      })

      case DELETE_VEHICULE:
        return state.filter((vehicule) => vehicule.id !== action.payload.vehiculeId)
      default:
      return state;
  }
}
