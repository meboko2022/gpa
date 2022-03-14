export const GET_STRUCTURES = "GET_STRUCTURES";
export const ADD_STRUCTURE = "ADD_STRUCTURE";
export const EDIT_STRUCTURE = "ADD_STRUCTURE";
export const DELETE_STRUCTURE ="DELETE_STRUCTURE";

export const getStructures = () => {
  return (dispatch) => {
    return fetch("https://ms-parc.herokuapp.com/api/crud/structure/get?size=20")
      .then((res) => res.json())
      .then((data) => dispatch({ type: GET_STRUCTURES, payload: data }))
      .catch((err) => console.log(err));
  };
};

export const addStructure = (data) => {
  return (dispatch) => {
    return fetch("https://ms-parc.herokuapp.com/api/crud/structure/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ADD_STRUCTURE, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const editStructure = (data) => {
  return (dispatch) => {
    return fetch("https://ms-parc.herokuapp.com/api/crud/structure/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: EDIT_STRUCTURE, payload: { ...data } }))
      .catch((err) => console.log(err));
  };
};

export const deleteStructure = (structureId) => {
  return (dispatch) => {
    return fetch(`https://ms-parc.herokuapp.com/api/crud/structure/delete/${structureId}`, 
    {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
    })
    .then((res) => dispatch({ type: DELETE_STRUCTURE, payload: { structureId } }))
    .catch((err) => console.log(err))
  }
}
