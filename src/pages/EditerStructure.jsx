import React from 'react'
import isEmpty from '../assets/images/utils/Utils';
import { useSelector } from 'react-redux'
import { FormEditStructure } from '../components/FormEditStructure';
export const EditerStructure = () => {
  const structures = useSelector((state) => state.structureReducer);

  return (
    <div>
      {!isEmpty(structures) && <FormEditStructure/>}
    </div>
  )
}
