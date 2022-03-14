import React from "react";
import { useState, useEffect } from "react";
import { editUtilisateur } from "../actions/utilisateur.action";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import isEmpty from "../assets/images/utils/Utils";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const FormEditUtilisateur = () => {
  const [editNom, setEditNom] = useState("");
  const [editPrenom, setEditPrenom] = useState("");
  const [editTelephone, setEditTelephone] = useState("");
  const [editStatutCompte, setEditStatutCompte] = useState("");
  const [editLogin, setEditLogin] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editConfirmPassword, setEditConfirmPassword] = useState("");
  const [editStructure, setEditStructure] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const utilisateurs = useSelector((state) => state.utilisateurReducer);
  const structures = useSelector((state) => state.structureReducer);
  let navigate = useNavigate();

  const utilisateursFilter = utilisateurs.filter((i) => i.id === parseInt(id));
  useEffect(() => {
    if (utilisateursFilter.length > 0) {
      setEditNom(utilisateursFilter[0].nom);
      setEditPrenom(utilisateursFilter[0].prenom);
      setEditTelephone(utilisateursFilter[0].telephone);
      setEditStatutCompte(utilisateursFilter[0].statutCompte);
      setEditLogin(utilisateursFilter[0].login);
      setEditPassword(utilisateursFilter[0].password);
      setEditStructure(utilisateursFilter[0].structure.id);
    }
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    const editData = {
      id: parseInt(id),
      nom: editNom,
      prenom: editPrenom,
      telephone: editTelephone,
      statutCompte: editStatutCompte,
      login: editLogin,
      password: editPassword,
      structure: editStructure
    };
    dispatch(editUtilisateur(editData));
    navigate("/utilisateur");
  };

  return (
    <Container>
      <h1 className="page_title">Formulaire d'édition d'un utilisateur</h1>
      <p className="callBack" onClick={() => navigate("/utilisateur")}>
        <FontAwesomeIcon className="fa_font" icon={faArrowLeft} /> Retour à
        liste des utilisateurs
      </p>
      <h1 className="page_title">Modifier un utilisateur</h1>
      <div className="editForm">
        <form
          action=""
          className="formForUtilisateur"
          onSubmit={(e) => handleEdit(e)}
        >

<div className="input_group">
            <label htmlFor="structure">Structure</label>
            <select
              name="structure"
              onChange={(e) => setEditStructure(e.target.value)}
              value={editStructure}
              className="input_form"
            >
                <option value="">---Sélectionner une structure---</option>
              {!isEmpty(structures) &&
                structures.map((structure) => (
                  <option key={structure.id} value={structure.id}>
                    {structure.libelle}
                  </option>
                ))}
            </select>
          </div>

          
          <div className="input_group">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              name="nom"
              id="nom"
              className="input_form"
              onChange={(e) => setEditNom(e.target.value)}
              value=""
            />
          </div>

          <div className="input_group">
            <label htmlFor="prenom">Prénom</label>
            <input
              type="prenom"
              name="prenom"
              id="prenom"
              className="input_form"
              onChange={(e) => setEditPrenom(e.target.value)}
              value={editPrenom}
            />
          </div>

          <div className="input_group">
            <label htmlFor="login">Login</label>
            <input
              type="text"
              name="login"
              id="login"
              className="input_form"
              onChange={(e) => setEditLogin(e.target.value)}
              value=""
            />
          </div>


          <div className="input_group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              id="password"
              className="input_form"
              onChange={(e) => setEditPassword(e.target.value)}
              value=""
            />
          </div>

          <div className="input_group">
            <label htmlFor="confirmpassword">Confirmer le mot de passe</label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              className="input_form"
              onChange={(e) =>setEditConfirmPassword(e.target.value)}
              value=""
            />
          </div>

          <div className="input_group">
            <span>Statut du compte</span>
            <div className="radio_button">
              <div className="radiobutton_group">
                <label htmlFor="statutVerrouillé">Verrouillé</label>
                <input
                  type="radio"
                  name="statut"
                  id="statutVerrouillé"
                  className="input_form_radio"
                  onChange={(e) => setEditStatutCompte(e.target.value)}
                  value={editStatutCompte}
                />
              </div>

              <div className="radiobutton_group">
                <label htmlFor="statutDéverrouillé">Déverrouillé</label>
                <input
                  type="radio"
                  name="statut"
                  id="statutDéverrouillé"
                  className="input_form_radio"
                  onChange={(e) => setEditStatutCompte(e.target.value)}
                  value={editStatutCompte}
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
