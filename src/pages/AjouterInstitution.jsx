import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addInstitution } from "../actions/institutions.action";
import isEmpty from "../assets/images/utils/Utils";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const AjouterInstitution = () => {
  const [libelle, setLibelle] = useState("");
  const [email, setEmail] = useState("");
  const [niveau, setNivau] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const niveaux = useSelector((state) => state.niveauReducer);
  const handleForm = (e) => {
    e.preventDefault();
    if (libelle && email && nom && prenom && niveau) {
      const data = {
        emailChefParc: email,
        niveau : {id: parseInt(niveau)},
        libelle:libelle,
        nomChefParc: nom,
        prenomChefParc: prenom,
      };
      dispatch(addInstitution(data));
      navigate("/institutions");
    }
  };
  return (
    <Container>
      <h1 className='page_title'>Formulaire d'ajout d'une institution</h1>
      <div className="addForm">
        <form action="" onSubmit={(e) => handleForm(e)}>
          <div className="input_group">
            <label htmlFor="libelle">Nom de l'institution </label>
            <input
              type="text"
              name="libelle"
              id="libelle"
              className="input_form"
              onChange={(e) => setLibelle(e.target.value)}
              value={libelle}
            />
          </div>

          <div className="input_group">
            <label htmlFor="email">Email Chef Parc </label>
            <input
              type="email"
              name="email"
              id="emailChefParc"
              className="input_form"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input_group">
            <label htmlFor="niveau">Niveau de l'institution</label>
            <select
              name="niveau"
              onChange={(e) => setNivau(e.target.value)}
              value={niveau}
              className="input_form"
            >
                <option value="">---Sélectionner un niveau---</option>
              {!isEmpty(niveaux) &&
                niveaux.map((niveau) => (
                  <option key={niveau.id} value={niveau.id}>
                    {niveau.libelle}
                  </option>
                ))}
            </select>
          </div>

          <div className="input_group">
            <label htmlFor="nom">Nom Chef Parc </label>
            <input
              type="text"
              name="nom"
              id="nomChefParc"
              className="input_form"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>

          <div className="input_group">
            <label htmlFor="prenom">Prenom Chef Parc </label>
            <input
              type="text"
              name="prenom"
              id="prenomChefParc"
              className="input_form"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>
          <div className="input_group_submit">
            <input
              type="submit"
              className="submit_form_add"
              value="Enrégistrer"
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

const Container = styled.div`
.addForm{
  width: 60%;
  display: flex;
 
  form{
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;

      .input_group{
          display: flex;
          flex-direction: column;
          width: 100%;

          label{
              margin-bottom: 5px;
          }
          input, select {
              padding: 10px 20px;
              font-size: 16px;
              margin-bottom: 20px;
              border-radius: 3px;
              box-shadow: 0 3px 6px 0.16 #000;
              border: 1px solid #006828;
              background: #fff;
            }

      }

      .input_group_submit{
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
}
`
