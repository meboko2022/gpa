// https://ms-parc.herokuapp.com/api/crud/cva/get?size=20
export const GET_CHAUFFEURS = "GET_CHAUFFEURS"
export const DELETE_CHAUFFEURS ="DELETE_CHAUFFEURS"
export const ADD_CHAUFFEUR = "ADD_CHAUFEUR"

export const getChauffeurs = () => {
    return (dispatch) => {
      return fetch(
        "https://ms-parc.herokuapp.com/api/crud/cva/get?size=20"
      )
        .then((res) => res.json())
        .then((data) => dispatch({ type: GET_CHAUFFEURS, payload: data }))
        .catch((err) => console.log(err));
    };
  };

  export const deletteChauffeurs = (chauffeurId) => {
    return (dispatch) =>{
      return fetch(`https://ms-parc.herokuapp.com/api/crud/cva/delete/${chauffeurId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
      .then((res) =>
        dispatch({ type: DELETE_CHAUFFEURS, payload: { chauffeurId } })
      )

      .catch((err) => console.log(err));
    }
  }

  export const addChauffeur = (data) => {
    return (dispatch) => {
      return fetch("https://ms-parc.herokuapp.com/api/crud/cva/add", {
        method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
      })
      .then((res) => res.json())
      .then((data) => {
        dispatch(getChauffeurs());
      })
    }
  }