export const GET_VEHICULES = "GET_VEHICULES";
export const ADD_VEHICULES = "ADD_VEHICULES";
export const EDIT_VEHICULE = "ADD_VEHICULES";
export const DELETE_VEHICULE ="DELETE_VEHICULES";

export const getVehicules = () => {
  return (dispatch) => {
    return fetch("https://ms-parc.herokuapp.com/api/crud/vehicule/get?size=20")
      .then((res) => res.json())
      .then((data) => dispatch({ type: GET_VEHICULES, payload: data }))
      .catch((err) => console.log(err));
  };
};

export const addVehicules = (data) => {
  return (dispatch) => {
    return fetch("https://ms-parc.herokuapp.com/api/crud/vehicule/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // dispatch({type: ADD_VEHICULES, payload:data})
        dispatch(getVehicules());
      })
      .catch((err) => console.log(err));
  };
};

export const editVehicule = (data) => {
  return (dispatch) => {
    return fetch("https://ms-parc.herokuapp.com/api/crud/vehicule/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) =>
        //   dispatch({ type: EDIT_VEHICULE, payload: { ...data } })
        dispatch(getVehicules())
      )
      .catch((err) => console.log(err));
  };
};

export const deleteVehicule = (vehiculeId) => {
  return (dispatch) => {
    return fetch(`https://ms-parc.herokuapp.com/api/crud/vehicule/delete/${vehiculeId}`, 
    {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
    })
    .then((res) => dispatch({type: DELETE_VEHICULE, payload: {vehiculeId}}))
    .catch((err) => console.log(err))
  }
}
