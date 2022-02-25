import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addVehicules } from "../actions/vehicules.action";
import isEmpty from "../assets/images/utils/Utils";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const AjouterVehicules = () => {
  const [etat, setEtat] = useState("");
  const [immatriculation, setImmatriculation] = useState("");
  const [institution, setInstitution] = useState("");
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const institutions = useSelector((state) => state.institutionsReducer);
  const handleForm = (e) => {
    e.preventDefault();
    if (etat && immatriculation && institution && marque && modele) {
      const data = {
        etatActuel: etat,
        immatriculation: immatriculation,
        institution: { id: parseInt(institution) },
        marque: marque,
        modele: modele,
      };
      dispatch(addVehicules(data));
      navigate("/vehicules");
    }
  };
  return (
    <Container>
      <p className="callBack" onClick={() => navigate("/vehicules")}>
        <FontAwesomeIcon className="fa_font" icon={faArrowLeft} /> Retour à
        gestion de véhicules
      </p>
      <h1 className="page_title">Ajouter un véhicule</h1>
      <div className="addForm">
        <form
          action=""
          className="formForVehicule"
          onSubmit={(e) => handleForm(e)}
        >
          <div className="input_group">
            <label htmlFor="categorie">Catégorie</label>
            <input
              type="text"
              name="categorie"
              id="categorie"
              className="input_form"
              disabled
              // onChange={(e) => setImmatriculation(e.target.value)}
              value=""
            />
          </div>

          <div className="input_group">
            <label htmlFor="marque">Marque</label>
            <input
              type="text"
              name="marque"
              id="marque"
              className="input_form"
              onChange={(e) => setMarque(e.target.value)}
              value={marque}
            />
          </div>

          <div className="input_group">
            <label htmlFor="modele">Modèle</label>
            <input
              type="text"
              name="modele"
              id="modele"
              className="input_form"
              onChange={(e) => setModele(e.target.value)}
              value={modele}
            />
          </div>

          <div className="input_group">
            <label htmlFor="immatriculation">Imatriculation</label>
            <input
              type="text"
              name="immatriculation"
              id="immatriculation"
              className="input_form"
              onChange={(e) => setImmatriculation(e.target.value)}
              value={immatriculation}
            />
          </div>

          <div className="input_group">
            <label htmlFor="transmission">Transmission</label>
            <select
              name="transmission"
              // onChange={(e) => setInstitution(e.target.value)}
              value=""
              className="input_form"
              disabled
            >
              <option value="">---Choisissez une transmission---</option>
              <option value="automatique">Automatique</option>
              <option value="manuel">Manuel</option>
            </select>
          </div>

          <div className="input_group">
            <label htmlFor="energie">Energie</label>
            <select
              disabled
              name="energie"
              // onChange={(e) => setInstitution(e.target.value)}
              value=""
              className="input_form"
            >
              <option value="">---Choisissez une source d'énergie---</option>
              <option value="essence">Essence</option>
              <option value="diesel">Diesel</option>
              <option value="hydrogène">Hydrogène</option>
              <option value="electrique">Electrique</option>
            </select>
          </div>

          <div className="input_group">
            <label htmlFor="kilometrage">Kilometrage</label>
            <input
              disabled
              type="text"
              name="kilometrage"
              id="kilometrage"
              className="input_form"
              // onChange={(e) => setModele(e.target.value)}
              value=""
            />
          </div>

          <div className="input_group">
            <label htmlFor="vimin">Vitesse Minimale</label>
            <input
              disabled
              type="text"
              name="vmin"
              id="vmin"
              className="input_form"
              // onChange={(e) => setModele(e.target.value)}
              value=""
            />
          </div>

          <div className="input_group">
            <label htmlFor="vmax">Vistesse maximale</label>
            <input
              disabled
              type="text"
              name="vmax"
              id="vmax"
              className="input_form"
              // onChange={(e) => setModele(e.target.value)}
              value=""
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
            <span>Etat du véhicule</span>
            <div className="radio_button">
              <div className="radiobutton_group">
                <label htmlFor="etatDisponible">Disponible</label>
                <input
                  type="radio"
                  name="etat"
                  id="etatDisponible"
                  className="input_form_radio"
                  onChange={(e) => setEtat(e.target.value)}
                  value="disponible"
                />
              </div>

              <div className="radiobutton_group">
                <label htmlFor="etatNonDisponible">Non disponible</label>
                <input
                  type="radio"
                  name="etat"
                  id="etatNonDisponible"
                  className="input_form_radio"
                  onChange={(e) => setEtat(e.target.value)}
                  value="indisponible"
                />
              </div>
            </div>
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
