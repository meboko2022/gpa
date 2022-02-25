import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNiveau } from "../actions/niveau.action";
import styled from "styled-components";

export const FormModal = () => {
  const [libelle, setLibelle] = useState("");
  const dispatch = useDispatch();
  const handleForm = (e) => {
    e.preventDefault();
    if (libelle) {
      const data = {
        libelle,
      };
      dispatch(addNiveau(data));
      setLibelle("");
    }
  };
  return (
    <ModaleStyled
      className=" modal fade"
      id="formModal"
      data-bs-backdrop="static"
      data-bs-keyword="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className=" modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="formModalLabel">
              Formulaire d'ajout de niveau
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form
              className="form"
              onSubmit={(e) => {
                handleForm(e);
              }}
            >
              <input
                type="text"
                name="nomNiveau"
                value={libelle}
                id="nomNiveau"
                className="formInput"
                placeholder="Nom du niveau"
                onChange={(e) => setLibelle(e.target.value)}
              />
              <input type="submit" value="Ajouter" />
            </form>
          </div>
        </div>
      </div>
    </ModaleStyled>
  );
};

const ModaleStyled = styled.div`
  form {
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input[type="text"] {
      width: 100%;
      padding: 10px 20px;
      margin-right: 10px;
      font-size: 16px;
      border-radius: 5px;
      box-shadow: 0 3px 6px 0.16 #000;
      border: 1px solid #006828;
      background: #fff;
    }
    input[type="submit"] {
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
      margin-left: 10px;
      box-shadow: 0 3px 6px 0.16 #000;
      border: 1px solid #006828;
      background: #006828;
      color: #fff;
    }
  }
`;
