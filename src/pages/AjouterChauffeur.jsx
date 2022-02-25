import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import isEmpty from "../assets/images/utils/Utils";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { addChauffeur } from "../actions/chauffeurs.action";

export const AjouterChauffeur = () => {
  const [etat, setEtat] = useState("");
  const [institution, setInstitution] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const institutions = useSelector((state) => state.institutionsReducer);
  const handleForm = (e) => {
    e.preventDefault();
    if (etat && institution && nom && prenom && telephone) {
      const data = {
        etatChauffeur: etat,
        institution: { id: parseInt(institution) },
        nom: nom,
        prenom: prenom,
        telephone: telephone,
      };
      dispatch(addChauffeur(data));
      navigate("/chauffeur");
    }
  };
  return (
    <Container>
      <p className="callBack" onClick={() => navigate("/chauffeur")}>
        <FontAwesomeIcon className="fa_font" icon={faArrowLeft} /> Retour à
        gestion des chauffeurs
      </p>
      <h1 className="page_title">Ajouter un chauffeur</h1>
      <div className="addForm">
        <form
          action=""
          className="formForVehicule"
          onSubmit={(e) => handleForm(e)}
        >
          <div className="input_group">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              name="nom"
              id="nom"
              className="input_form"
              onChange={(e) => setNom(e.target.value)}
              value={nom}
            />
          </div>

          <div className="input_group">
            <label htmlFor="prenom">Prenom</label>
            <input
              type="text"
              name="prenom"
              id="prenom"
              className="input_form"
              onChange={(e) => setPrenom(e.target.value)}
              value={prenom}
            />
          </div>

          <div className="input_group">
            <label htmlFor="telephone">Contat télphonique</label>
            <input
              type="tel"
              name="telephone"
              id="telephone"
              className="input_form"
              onChange={(e) => setTelephone(e.target.value)}
              value={telephone}
            />
          </div>

          <div className="input_group">
            <label htmlFor="institution">Institution</label>
            <select
              name="institution"
              onChange={(e) => setInstitution(e.target.value)}
              value={institution}
              className="input_form"
            >
              <option value="">---Sélectionner une institution---</option>
              {!isEmpty(institutions) &&
                institutions.map((institution) => (
                  <option key={institution.id} value={institution.id}>
                    {institution.libelle}
                  </option>
                ))}
            </select>
          </div>
          <div className="input_group">
            <label htmlFor="etatChauffeur">Contat télphonique</label>
            <select
              name="etatChauffeur"
              id="etatChauffeur"
              className="input_form"
              value={etat}
              onChange={(e) => setEtat(e.target.value)}
            >
              <option value="">---Sélectionner un etat---</option>
              <option value="ACTIF">Actif</option>
              <option value="NON ACTIF">Non actif</option>
            </select>
          </div>
          <div className="input_group_submit">
            <input type="submit" className="submit_form_add" value="Ajouter " />
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
