import React from 'react'
import isEmpty from '../assets/images/utils/Utils';
import { useSelector } from 'react-redux'
import {FormEditInstitutions} from '../components/FormEditInstitutions'

export const EditerInstitution = () => {
  const institutions = useSelector((state) => state.institutionsReducer);

  return (
    <div>
      <h1 className='page_title'>Formulaire d'édition d'une institution</h1>
      { !isEmpty(institutions) && <FormEditInstitutions/>}
    </div>
  )
}
