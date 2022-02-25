export const GET_NIVEAU = "GET_NIVEAU";
export const ADD_NIVEAU = "ADD_NIVEAU";
export const DELETE_NIVEAU = "DELETE_NIVEAU";
export const EDIT_NIVEAU = "EDIT_NIVEAU";

export const getNiveau = () => {
  return (dispatch) => {
    return fetch(
      "https://ms-parc.herokuapp.com/api/crud/niveau/get?size=20_sort=id&_order=desc"
    )
      .then((res) => res.json())
      .then((data) => dispatch({ type: GET_NIVEAU, payload: data }))
      
      .catch((err) => console.log(err));
  };
};

export const addNiveau = (data) => {
  return (dispatch) => {
    return fetch("https://ms-parc.herokuapp.com/api/crud/niveau/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ADD_NIVEAU, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const editNiveau = (data) => {
  return (dispatch) => {
    return fetch(
      `https://ms-parc.herokuapp.com/api/crud/niveau/update/${data.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( data ),
      }
    )
      .then((res) => res.json())
      .then((data) => dispatch({ type: EDIT_NIVEAU, payload: { ...data } }))
      .catch((err) => console.log(err));
  };
};

export const deleteNiveau = (niveauId) => {
  return (dispatch) => {
    return (
      fetch(
        `https://ms-parc.herokuapp.com/api/crud/niveau/delete/${niveauId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((res) => dispatch({ type: DELETE_NIVEAU, payload: { niveauId } }))
        //   .then( => dispatch({ type: DELETE_NIVEAU, payload: { niveauId } }))
        .catch((err) => console.log(err))
    );
  };
};
