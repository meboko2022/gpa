import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";


import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNiveau, getNiveau } from "../actions/niveau.action";
import styled from "styled-components";

export const FormModal = () => {
  //const [libelle, setLibelle] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
 /* const handleForm = (e) => {
    e.preventDefault();
    if (libelle) {
      const data = {
        libelle,
      };
      dispatch(addNiveau(data));
      setLibelle("");
    }
  };*/


  const validationSchema = Yup.object().shape({
    libelle: Yup.string()
        .required("ce champ est obligatoire")
  });
  
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });
  
  const { errors } = formState;
  
  const onSubmit = data =>  {
    if (data.libelle) {
      const champs = {
        libelle: data.libelle
      };

    console.log(champs)
    dispatch(addNiveau(champs));
    reset();   
          
    };
    navigate("/niveauInstitution");     
    dispatch(getNiveau());   
  }


  return (
    <ModaleStyled
        className=" modal fade"
        id="formModal"
        data-bs-backdrop="static"
        data-bs-keyword="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className=" modal-dialog modal-dialog-centered">
          
          
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="formModalLabel">
                  Formulaire d'ajout de niveau
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                ></button>
              </div>
            
              <div className="modal-body">
                <form
                  className="form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="input_group">                
                      <label htmlFor="libelle">libelle</label>
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
            </div>
        </div>

    </ModaleStyled>
);
};

const ModaleStyled = styled.div`
form {
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input[type="text"] {
    width: 100%;
    padding: 10px 20px;
    margin-right: 10px;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: 0 3px 6px 0.16 #000;
    border: 1px solid #006828;
    background: #fff;
  }
  input[type="submit"] {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    margin-left: 10px;
    box-shadow: 0 3px 6px 0.16 #000;
    border: 1px solid #006828;
    background: #006828;
    color: #fff;
  }
}
`;
