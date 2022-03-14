import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTypeUtilisateur } from "../actions/typeUtilisateur.action";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const AjouterTypeUtilisateur = () => {
  const [libelle, setLibelle] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    if (libelle) {
      const data = {
        libelle: libelle,      
      };
      dispatch(addTypeUtilisateur(data));
      navigate("/typeutilisateur");
    }
  };
  return (
    <Container>
      <p className="callBack" onClick={() => navigate("/typeutilisateur")}>
        <FontAwesomeIcon className="fa_font" icon={faArrowLeft} /> Retour à
        liste des types d'utilisateur
      </p>
      <h1 className="page_title">Ajouter un type d'utilisateur</h1>
      <div className="addForm">
        <form
          action=""
          className="formForTypeUtilisateur"
          onSubmit={(e) => handleForm(e)}
        >

          <div className="input_group">
            <label htmlFor="libelle">Libelle</label>
            <input
              type="text"
              name="libelle"
              id="libelle"
              className="input_form"
              onChange={(e) => setLibelle(e.target.value)}
              value={libelle}
            />
          </div>

         
          <div className="input_group_submit">
            <input
              type="submit"
              className="submit_form_add"
              value="Ajouter "
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

const Container = styled.div`
.callBack{
  font-size: 16px;
  margin-top: 20px;
  font-weight: 500;
  cursor: pointer;
  

  .fa_font{
    margin-right: 10px;
  }
}
  .addForm {
    display: flex;
    justify-content: space-between;

    form {
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      padding-bottom:35px;

      .input_group {
        display: flex;
        flex-direction: column;
        margin-right: 25px;
        margin-bottom: 15px;

        .radio_button{
          display: flex;
          justify-content: space-between;
          width: 350px;
          padding: 8px 15px;
          border: 1px solid black;
          border-radius: 3px;

          .radiobutton_group{
            display: flex;
            align-items: center; 
            label{
              margin-right: 10px;
            }

            input[type="radio"]{
              width: 1rem;
              height: 1rem;
            }
          }
        }

        input,
        select {
          padding: 8px 15px;
          border-radius: 3px;
          border: 1px solid black;
        }
        input[type="text"],
        select {
          width: 200px;
        }
      }
      .input_group_submit{
        position: absolute;
        bottom: 0;
        .submit_form_add{
            padding: 10px 25px;
            margin-left: 0;
            font-size: 16px;
            border-radius: 5px;
            box-shadow: 0 3px 6px 0.16 #000;
            border: 1px solid #006828;
            background: #006828;
            color: #fff;
          }
    }
  }
`;
