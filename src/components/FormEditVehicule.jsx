import React from "react";
import { useState, useEffect } from "react";
import { editVehicule } from "../actions/vehicules.action";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import isEmpty from "../assets/images/utils/Utils";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const FormEditVehicule = () => {
  const [editEtat, setEditEtat] = useState("");
  const [editImmatriculation, setEditImmatriculation] = useState("");
  const [editInstitution, setEditInstitution] = useState("");
  const [editMarque, setEditMarque] = useState("");
  const [editModele, setEditModele] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const vehicules = useSelector((state) => state.vehiculesReducer);
  const institutions = useSelector((state) => state.institutionsReducer);
  let navigate = useNavigate();

  const vehiculesFilter = vehicules.filter((i) => i.id === parseInt(id));
  useEffect(() => {
    if (vehiculesFilter.length > 0) {
      setEditEtat(vehiculesFilter[0].etatActuel);
      setEditImmatriculation(vehiculesFilter[0].immatriculation);
      setEditMarque(vehiculesFilter[0].marque);
      setEditModele(vehiculesFilter[0].modele);
      setEditInstitution(vehiculesFilter[0].institution.id);
    }
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    const editData = {
      etatActuel: editEtat,
      id: parseInt(id),
      immatriculation: editImmatriculation,
      institution: { id: parseInt(editInstitution) },
      marque: editMarque,
      modele: editModele,
    };
    dispatch(editVehicule(editData));
    navigate("/vehicules");
  };

  return (
    <Container>
      <h1 className="page_title">Formulaire d'édition d'une institution</h1>
      <p className="callBack" onClick={() => navigate("/vehicules")}>
        <FontAwesomeIcon className="fa_font" icon={faArrowLeft} /> Retour à
        gestion de véhicules
      </p>
      <h1 className="page_title">Ajouter un véhicule</h1>
      <div className="editForm">
        <form
          action=""
          className="formForVehicule"
          onSubmit={(e) => handleEdit(e)}
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
              onChange={(e) => setEditMarque(e.target.value)}
              value={editMarque}
            />
          </div>

          <div className="input_group">
            <label htmlFor="modele">Modèle</label>
            <input
              type="text"
              name="modele"
              id="modele"
              className="input_form"
              onChange={(e) => setEditModele(e.target.value)}
              value={editModele}
            />
          </div>

          <div className="input_group">
            <label htmlFor="immatriculation">Imatriculation</label>
            <input
              type="text"
              name="immatriculation"
              id="immatriculation"
              className="input_form"
              onChange={(e) => setEditImmatriculation(e.target.value)}
              value={editImmatriculation}
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
              onChange={(e) => setEditInstitution(e.target.value)}
              value={editInstitution}
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
                  onChange={(e) => setEditEtat(e.target.value)}
                  value={editEtat}
                />
              </div>

              <div className="radiobutton_group">
                <label htmlFor="etatNonDisponible">Non disponible</label>
                <input
                  type="radio"
                  name="etat"
                  id="etatNonDisponible"
                  className="input_form_radio"
                  onChange={(e) => setEditEtat(e.target.value)}
                  value={editEtat}
                />
              </div>
            </div>
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
