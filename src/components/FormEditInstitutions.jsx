import React from "react";
import { useState } from "react";
import { editInstitution } from "../actions/institutions.action";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import isEmpty from "../assets/images/utils/Utils";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const FormEditInstitutions = () => {
  const [editEmail, setEditEmail] = useState("");
  const [editLibelle, setEditLibelle] = useState("");
  const [editNiveau, setEditNiveau] = useState("");
  const [editNom, setEditNom] = useState("");
  const [editPrenom, setEditPrenom] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const institutions = useSelector((state) => state.institutionsReducer);
  const niveaux = useSelector((state) => state.niveauReducer);
    const navigate = useNavigate()

  const institutionsFilter = institutions.filter((i) => i.id === parseInt(id));
  useEffect(() => {
    if (institutionsFilter.length > 0) {
      setEditEmail(institutionsFilter[0].emailChefParc);
      setEditLibelle(institutionsFilter[0].libelle);
      setEditNom(institutionsFilter[0].nomChefParc);
      setEditPrenom(institutionsFilter[0].prenomChefParc);
      setEditNiveau(institutionsFilter[0].niveau.id);
    }
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    const editData = {
      emailChefParc: editEmail,
      id: parseInt(id),
      libelle: editLibelle,
      niveau: { id: parseInt(editNiveau) },
      nomChefParc: editNom,
      prenomChefParc: editPrenom,
    };
    dispatch(editInstitution(editData));
    navigate('/institutions');
  };
  return (
    <EditForm className="editForm">
      <form action="" onSubmit={(e) => handleEdit(e)}>
        <div className="input_group">
          <label htmlFor="email">Email Chef Parc </label>
          <input
            type="email"
            name="email"
            id="emailChefParc"
            className="input_form"
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
          />
        </div>

        <div className="input_group">
          <label htmlFor="libelle">Nom de l'institution </label>
          <input
            type="text"
            name="libelle"
            id="libelle"
            className="input_form"
            onChange={(e) => setEditLibelle(e.target.value)}
            value={editLibelle}
          />
        </div>

        <div className="input_group">
          <label htmlFor="niveau">Niveau de l'institution</label>
          <select
            name="niveau"
            id=""
            value={editNiveau}
            onChange={(e) => setEditNiveau(e.target.value)}
            className="input_form"
          >
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
            value={editNom}
            onChange={(e) => setEditNom(e.target.value)}
          />
        </div>

        <div className="input_group">
          <label htmlFor="prenom">Prenom chef parc</label>
          <input
            type="text"
            name="prenom"
            id="prenomChefParc"
            className="input_form"
            value={editPrenom}
            onChange={(e) => setEditPrenom(e.target.value)}
          />
        </div>
        <div className="input_group_submit">
          <input
            type="submit"
            className="submit_form_edit"
            value="Enrégistrer les modifications"
          />
        </div>
      </form>
    </EditForm>
  );
};

const EditForm = styled.div`
  width: 60%;
  display: flex;

  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    .input_group {
      display: flex;
      flex-direction: column;
      width: 100%;

      label {
        margin-bottom: 5px;
      }
      input,
      select {
        padding: 0.375rem 0.75rem;
        font-size: 16px;
        margin-bottom: 20px;
        border-radius: 5px;
        box-shadow: 0 3px 6px 0.16 #000;
        border: 1px solid #006828;
        background: #fff;
      }
    }

    .input_group_submit {
      .submit_form_edit {
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
