export const GET_INSTITUTION = "GET_INSTITUTION";
export const EDIT_INSTITUTION = "EDIT_INSTITUTION";
export const ADD_INSTITUTION = "ADD_INSTITUTION";
export const DELETE_INSTITUTION = "DELETE_INSTITUTION";

export const getInstitution = () => {
  return (dispatch) => {
    return fetch(
      "https://ms-parc.herokuapp.com/api/crud/institution/get?size=20"
    )
      .then((res) => res.json())
      .then((data) => dispatch({ type: GET_INSTITUTION, payload: data }))
      .catch((err) => console.log(err));
  };
};

export const editInstitution = (data) => {
  return (dispatch) => {
    return fetch(
      "https://ms-parc.herokuapp.com/api/crud/institution/update",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: EDIT_INSTITUTION, payload: { ...data } })
      )
      .catch((err) => console.log(err));
  };
};

export const addInstitution = (data) => {
  return (dispatch) => {
    return fetch("https://ms-parc.herokuapp.com/api/crud/institution/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // dispatch({ type: ADD_INSTITUTION, payload: data });
        dispatch(getInstitution());
      })
      .catch((err) => console.log(err));
  };
};

export const deleteInstitution = (institutionId) => {
  return (dispatch) => {
    return fetch(
      `https://ms-parc.herokuapp.com/api/crud/institution/delete/${institutionId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) =>
        dispatch({ type: DELETE_INSTITUTION, payload: { institutionId } })
      )

      .catch((err) => console.log(err));
  };
};
