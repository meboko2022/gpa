import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

import { addStructure } from "../actions/structure.action";
import { getStructures } from "../actions/structure.action";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import isEmpty from "../assets/images/utils/Utils";

import { useSelector } from "react-redux";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


export const AjouterStructure = () => {
  const institutions = useSelector((state) => state.institutionsReducer);

  const dispatch = useDispatch();
 
  let navigate = useNavigate();

  


  const validationSchema = Yup.object().shape({
    institution: Yup.string()
        .required("ce champ est obligatoire"),
    libelle: Yup.string()
        .required("ce champ est obligatoire"),
    responsable: Yup.string()
        .required("ce champ est obligatoire"),
    telephone: Yup.string ()
        .required ("Le numéro de téléphone est requis")
        .allumettes(/ ^ \d{10} $ /,
          "Numéro de téléphone invalide"
        ),
/*telephone: Yup.string()
        .required("ce champ est obligatoire"),
libelle: Yup.string()
        .required("ce champ est obligatoire")
        .min(5, "trop petit!")
        .max(50, "trop long!"),
    email: Yup.string()
        .email("email invalide")
        .required("l'email est obligatoire"),
    password: Yup.string()
        .required("Mot de passe est obligatoire")
     .matches(/([0-9])/, "Au moins un entier")
        .min(8, "Mot de passe doit être plus grand que 8 caractères")
        .max(50, "Mot de passe doit être plus petit que 50 caractères"),
    confirmPassword: Yup.string()
        .oneOf(
            [Yup.ref("password"), null],
            "Le mot de passe de confirmation ne correspond pas"
        ),
    acceptTerms: Yup.bool().oneOf(
        [true],
        "Accepter les conditions est obligatoire"
    ),*/
  });
  
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
    dispatch(addStructure(champs));
    reset();   
          
    };
    navigate("/structure");     
    dispatch(getStructures());   
  }


  return (
    <Container>
        <p className="callBack" onClick={() => navigate("/structure")}>
          <FontAwesomeIcon className="fa_font" icon={faArrowLeft} /> Retour à
          gestion de structures
        </p>
        <h1 className="page_title">Ajouter une structure</h1>
        <div className="addForm">
          <form
              action=""
              className="formForVehicule"
              onSubmit={handleSubmit(onSubmit)}
          >


              <div className="input_group">
                  <label htmlFor="institution">Institution</label>
                  <select
                      {...register("institution")}
                      name="institution"
                      id="institution"
                      className="input_form"          >
                      <option value="">---Sélectionner une institution---</option>
                        {!isEmpty(institutions) &&
                          institutions.map((institution) => (
                          <option key={institution.id} value={institution.id}>
                          {institution.libelle}
                          </option>
                          ))
                        }
                    </select>
                </div>


                <div className="input_group">
                    <label htmlFor="libelle">Libellé</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("libelle")}
                        name="libelle"
                        id="libelle"
                    />
                    <small className="text-danger">
                        {errors.libelle?.message}
                    </small>
                </div>

                <div className="input_group">
                    <label htmlFor="marque">Marque</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("responsable")}
                        name="responsable"
                        id="responsable"
                    />
                    <small className="text-danger">
                        {errors.responsable?.message}
                    </small>
                </div>

                <div className="input_group">
                    <label htmlFor="telephone">Téléphone</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("telephone")}
                        name="telephone"
                        id="telephone"
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
                      Ajouter
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