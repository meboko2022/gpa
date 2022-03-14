export const GET_UTILISATEURS = "GET_UTILISATEURS";
export const ADD_UTILISATEUR = "ADD_UTILISATEUR";
export const EDIT_UTILISATEUR = "EDIT_UTILISATEUR";
export const DELETE_UTILISATEUR ="DELETE_UTILISATEUR";

export const getUtilisateurs = () => {
  return (dispatch) => {
    return fetch("https://ms-parc.herokuapp.com/api/crud/utilisateur/get?size=20")
      .then((res) => res.json())
      .then((data) => dispatch({ type: GET_UTILISATEURS, payload: data }))
      .catch((err) => console.log(err));
  };
};

export const addUtilisateur = (data) => {
  return (dispatch) => {
    return fetch("https://ms-parc.herokuapp.com/api/crud/utilisateur/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // dispatch({type: ADD_VEHICULES, payload:data})
        dispatch(getUtilisateurs());
      })
      .catch((err) => console.log(err));
  };
};

export const editUtilisateur = (data) => {
  return (dispatch) => {
    return fetch("https://ms-parc.herokuapp.com/api/crud/utilisateur/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) =>
        //   dispatch({ type: EDIT_VEHICULE, payload: { ...data } })
        dispatch(getUtilisateurs())
      )
      .catch((err) => console.log(err));
  };
};

export const deleteUtilisateur = (utilisateurId) => {
  return (dispatch) => {
    return fetch(`https://ms-parc.herokuapp.com/api/crud/utilisateur/delete/${utilisateurId}`, 
    {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
    })
    .then((res) => dispatch({type: DELETE_UTILISATEUR, payload: {utilisateurId}}))
    .catch((err) => console.log(err))
  }
}
