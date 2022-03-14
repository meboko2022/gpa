import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { editStructure } from "../actions/structure.action";
import { addStructure, getStructures } from "../actions/structure.action";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import isEmpty from "../assets/images/utils/Utils";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";


export const FormEditStructure = () => {
  const [editId, setEditId] = useState("");
  const [editInstitution, setEditInstitution] = useState("");
  const [editLibelle, setEditLibelle] = useState("");
  const [editResponsable, setEditResponsable] = useState("");
  const [editTelephone, setEditTelephone] = useState("");

  const dispatch = useDispatch();
  const { id } = useParams();

  const institutions = useSelector((state) => state.institutionsReducer);
  const structures = useSelector((state) => state.structureReducer);
  let navigate = useNavigate();

  const structuresFilter = structures.filter((i) => i.id === parseInt(id));
  useEffect(() => {
    if (structuresFilter.length > 0) {
      setEditId(structuresFilter[0].institution.id);
      setEditInstitution(structuresFilter[0].institution.libelle);
      setEditLibelle(structuresFilter[0].libelle);
      setEditResponsable(structuresFilter[0].responsable);
      setEditTelephone(structuresFilter[0].telephone);
    }
  }, []);

  /*const validationSchema = Yup.object().shape({
    institution: Yup.string()
        .required("ce champ est obligatoire"),
    libelle: Yup.string()
        .required("ce champ est obligatoire"),
    responsable: Yup.string()
        .required("ce champ est obligatoire"),
    telephone: Yup.string()
        .required("ce champ est obligatoire")    
  });*/


  const validationSchema = Yup.object({
    institution: Yup.string().required("Veuillez choisir une institution"),
    libelle: Yup.string().required("Veuillez saisir le libellé"),
    responsable: Yup.string().required("Veuillez saisir le nom et le prénom du responsable de la structure"), 
    telephone: Yup.string().required("Veuillez le numéro de téléphone"),
  }).required();

  
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });
  
  const { errors } = formState;

  const onSubmit = data =>  {
    if (data.institution && data.libelle && data.responsable && data.telephone) {
      const champs = {
        institution: { id: parseInt(data.institution) },
        libelle: data.libelle,
        responsable: data.responsable,        
        telephone: data.telephone
      };
      console.log(champs)
      
    //dispatch(editStructure(champs));
    //reset();   
          
    };
    //navigate("/structure");     
    //dispatch(getStructures());   
  }


  return (
    <Container>
      <p className="callBack" onClick={() => navigate("/structure")}>
        <FontAwesomeIcon className="fa_font" icon={faArrowLeft} /> Retour à
        gestion des structures
      </p>
      <h1 className="page_title">Modifier une structure</h1>
      <div className="editForm">
        <form
          action=""
          className="formForStructure"
          onSubmit={handleSubmit(onSubmit)}
        >

            <div className="input_group">
                <label htmlFor="institution">Institution</label>
                <select
                    className="input_form"
                    {...register("institution")}
                    name="institution"
                    id="institution"
                    onChange={(e) => setEditInstitution(e.target.value)}                  
                >
                    <option value={editId}>{editInstitution}</option>
                    {!isEmpty(institutions) &&
                        institutions.map((institution) => (
                        <option key={institution.id} value={institution.id}>
                          {institution.libelle}
                        </option>
                    ))}
                </select>
          </div>


          <div className="input_group">
              <label htmlFor="libelle">
                  Libellé :
              </label>
              <input
                  type="text"
                  className="input_form"
                  {...register("libelle")}
                  name="libelle"
                  id="libelle"              
                  onChange={(e) => setEditLibelle(e.target.value)}
                  defaultValue={editLibelle}              
              />
              <small className="text-danger">
                  {errors.libelle?.message}
              </small>
          </div>

          <div className="input_group">
              <label htmlFor="responsable">
                  Responsable :
              </label>
              <input
                  type="text"
                  className="input_form"
                  {...register("responsable")}
                  name="responsable"
                  id="responsable"              
                  onChange={(e) => setEditResponsable(e.target.value)}
                  defaultValue={editResponsable}              
              />
              <small className="text-danger">
                  {errors.responsable?.message}
              </small>
          </div>  

          <div className="input_group">
              <label htmlFor="telephone">
                  Téléphone :
              </label>
              <input
                  type="text"
                  className="input_form"
                  {...register("telephone")}
                  name="telephone"
                  id="telephone"              
                  onChange={(e) => setEditTelephone(e.target.value)}
                  defaultValue={editTelephone}              
              />
              <small className="text-danger">
                  {errors.telephone?.message}
              </small>
          </div>       


          <div className="form-group d-flex justify-content-center mt-4 justify-content-md-end gap-3">
              <button
                  type="submit"
                  className="btn btn-primary"
              >
                  Enregistrer les modifications
              </button>
              <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => reset()}
              >
                  Annuler
              </button>
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

