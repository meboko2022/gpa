import { combineReducers } from "redux";
import niveauReducer from "./niveau.reducer";
import institutionsReducer from "./institutions.reducer";
import vehiculesReducer from "./vehicules.reducer";
import chauffeurReducer from "./chauffeurs.reducer";

export default combineReducers({
    niveauReducer,
    institutionsReducer,
    vehiculesReducer,
    chauffeurReducer
    
})