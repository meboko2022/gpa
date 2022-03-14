import React from 'react'
import isEmpty from '../assets/images/utils/Utils';
import { useSelector } from 'react-redux'
import { FormEditTypeUtilisateur } from '../components/FormEditTypeUtilisateur';

export const EditerTypeUtilisateur = () => {
  const typeUtilisateurs = useSelector((state) => state.typeUtilisateurReducer);
  return (
      <div>
        {!isEmpty(typeUtilisateurs) && <FormEditTypeUtilisateur/>}
      </div>
  )
}
