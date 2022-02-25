import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/styles/main.scss";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getNiveau } from "./actions/niveau.action";
import { getInstitution } from "./actions/institutions.action";
import { Provider } from "react-redux";
import { getVehicules } from "./actions/vehicules.action";
import { getChauffeurs } from "./actions/chauffeurs.action";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getNiveau());
store.dispatch(getInstitution())
store.dispatch(getVehicules())
store.dispatch(getChauffeurs())
ReactDOM.render(
  <Provider store={store}>
     <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
