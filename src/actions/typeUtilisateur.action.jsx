export const GET_TYPES_UTILISATEUR = "GET_TYPES_UTILISATEUR";
export const ADD_TYPE_UTILISATEUR = "ADD_TYPE_UTILISATEUR";
export const DELETE_TYPE_UTILISATEUR = "DELETE_TYPE_UTILISATEUR";
export const EDIT_TYPE_UTILISATEUR = "EDIT_TYPE_UTILISATEUR";

export const getTypesUtilisateur = () => {
    return (dispatch) => {
      return fetch(
        "https://ms-parc.herokuapp.com/api/crud/type-utilisateur/get?size=20_sort=id&_order=desc"
      )
        .then((res) => res.json())
        .then((data) => dispatch({ type: GET_TYPES_UTILISATEUR, payload: data }))
        
        .catch((err) => console.log(err));
    };
  };


  export const addTypeUtilisateur = (data) => {
    return (dispatch) => {
      return fetch("https://ms-parc.herokuapp.com/api/crud/type-utilisateur/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: ADD_TYPE_UTILISATEUR, payload: data });
        })
        .catch((err) => console.log(err));
    };
  };


  export const editTypeUtilisateur = (data) => {
    return (dispatch) => {
      return fetch("https://ms-parc.herokuapp.com/api/crud/type-utilisateur/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) =>
              dispatch({ type: EDIT_TYPE_UTILISATEUR, payload: { ...data } })
              //dispatch(getTypesUtilisateur())
        )
        .catch((err) => console.log(err));
    };
  };













  /*

  export const editTypeUtilisateur = (data) => {
    return (dispatch) => {
      return fetch(`https://ms-parc.herokuapp.com/api/crud/type-utilisateur/update/${data.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: EDIT_TYPE_UTILISATEUR, payload: data })
        })
        .catch((err) => console.log(err));
    };
  };
*/
  export const deleteTypeUtilisateur = (typeUtilisateurId) => {
    return (dispatch) => {
      return (
        fetch(
          `https://ms-parc.herokuapp.com/api/crud/type-utilisateur/delete/${typeUtilisateurId}`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        )
          .then((res) => dispatch({ type: DELETE_TYPE_UTILISATEUR, payload: { typeUtilisateurId } }))
          .catch((err) => console.log(err))
      );
    };
  };