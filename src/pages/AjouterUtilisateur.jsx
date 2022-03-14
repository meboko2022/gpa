import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUtilisateur } from "../actions/utilisateur.action";
import isEmpty from "../assets/images/utils/Utils";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const AjouterUtilisateur = () => {
  const { register, formState: { errors } } = useForm();

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [statutCompte, setStatutCompte] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [structure, setStructure] = useState("");

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const structures = useSelector((state) => state.structureReducer);
  console.log(structures);


  const showPassword = () => {
    console.log("toto");
    /*
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    } */
  }


  const handleForm = (e) => {
    e.preventDefault();
    if (statutCompte && nom && prenom && statutCompte && login && password && structure ) {
      const data = {
        nom: nom,
        prenom: prenom,
        statutCompte: statutCompte,
        login: login,
        password: password,
        structure: { id: parseInt(structure) },
      };
      dispatch(addUtilisateur(data));
      navigate("/utilisateur");
    }
  };
  return (
    <Container>
      <p className="callBack" onClick={() => navigate("/utilisateur")}>
        <FontAwesomeIcon className="fa_font" icon={faArrowLeft} /> Retour à
        gestion des utilisateurs
      </p>
      <h1 className="page_title">Ajouter un utilisateur</h1>
      <div className="addForm">
        <form onSubmit={(e) => handleForm(e)}>

      <div className="input_group">
        <label htmlFor="structure">Structure</label>
          <select {...register("structure")}
              onChange={(e) => setStructure(e.target.value)}
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
              onChange={(e) => setNom(e.target.value)}
              value={nom}
              {...register("nom", { required: true })}              
            />
              {errors.nom && <span>This field is required</span>}
            
          </div>

          <div className="input_group">
            <label htmlFor="prenom">Prénom</label>
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
            <span>Statut du compte</span>
            <div className="radio_button">
              <div className="radiobutton_group">
                <label htmlFor="statutVerrouillé">Verrouillé</label>
                <input
                  type="radio"
                  name="etat"
                  id="statutVerrouillé"
                  className="input_form_radio"
                  onChange={(e) => setStatutCompte(e.target.value)}
                  value="Verrouillé"                  
                />
              </div>

              <div className="radiobutton_group">
                <label htmlFor="statutDéverrouillé">Déverrouillé</label>
                <input
                  type="radio"
                  name="etat"
                  id="statutDéverrouillé"
                  className="input_form_radio"
                  onChange={(e) => setStatutCompte(e.target.value)}
                  value="Déverrouillé"
                  checked
                />
              </div>
            </div>
          </div>

          <div className="input_group">
            <label htmlFor="login">Login</label>
            <input
              type="text"
              name="login"
              id="login"
              className="input_form"
              onChange={(e) => setLogin(e.target.value)}
              value={login}
            />
          </div>

          <div className="input_group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              id="password"
              className="input_form"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <p></p>
              <input type="checkbox" id="show" name="show" onclick={(e) => showPassword()} />
                <label for="scales">Show Password</label>
          </div>      


          <div className="input_group">
            <label htmlFor="confirmpassword">Confirmer le mot de passe</label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              className="input_form"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
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
        input[type="text"], input[type="password"],
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
