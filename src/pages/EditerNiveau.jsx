import React from 'react'
import isEmpty from '../assets/images/utils/Utils';
import { useSelector } from 'react-redux'
import { FormEditNiveau } from '../components/FormEditNiveau';
export const EditerNiveau = () => {
  const Niveaux = useSelector((state) => state.niveauReducer);

  return (
    <div>
      {!isEmpty(Niveaux) && <FormEditNiveau/>}
    </div>
  )
}
