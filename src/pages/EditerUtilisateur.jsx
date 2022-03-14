import React from 'react'
import isEmpty from '../assets/images/utils/Utils';
import { useSelector } from 'react-redux'
import { FormEditUtilisateur } from '../components/FormEditUtilisateur';

export const EditerUtilisateur = () => {
  const utilisateurs = useSelector((state) => state.utilisateurReducer);

  return (
    <div>
      {!isEmpty(utilisateurs) && <FormEditUtilisateur/>}
    </div>
  )
}
