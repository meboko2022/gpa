import React from "react";
import { useState, useEffect } from "react";
import { editNiveau } from "../actions/Niveau.action";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const FormEditNiveau = () => {
  const [editLibelle, setEditLibelle] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const niveaux = useSelector((state) => state.niveauReducer);
  let navigate = useNavigate();
  console.log(niveaux.id);

  const niveauxFilter = niveaux.filter((i) => i.id === parseInt(id));
  useEffect(() => {
    if (niveauxFilter.length > 0) {
      setEditLibelle(niveauxFilter[0].libelle);      
    }
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    const editData = {
      libelle: editLibelle,
    };
    dispatch(editNiveau(editData));
    navigate("/niveauInstitution");
  };

  return (
    <Container>
      <h1 className="page_title">Formulaire d'édition d'un niveau</h1>
      <p className="callBack" onClick={() => navigate("/niveauInstitution")}>
        <FontAwesomeIcon className="fa_font" icon={faArrowLeft} /> Retour à
        la liste des niveaux
      </p>
      <h1 className="page_title">Modifier un niveau</h1>
      <div className="editForm">
        <form
          action=""
          className="formForNiveau"
          onSubmit={(e) => handleEdit(e)}
        >
          
          <div className="input_group">
            <label htmlFor="libelle">Libellé</label>
            <input
              type="text"
              name="libelle"
              id="libelle"
              className="input_form"
              onChange={(e) => setEditLibelle(e.target.value)}
              value={editLibelle}
            />
          </div>

          <div className="input_group_submit">
            <input
              type="submit"
              className="submit_form_edit"
              value="Enrégistrer les modifications "
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
    .editForm {
      display: flex;
      justify-content: space-between;
  
      form {
        width: 100%;
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
            width: 350px;
          }
        }
        .input_group_submit{
          position: absolute;
          bottom: 0;
          .submit_form_edit{
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
