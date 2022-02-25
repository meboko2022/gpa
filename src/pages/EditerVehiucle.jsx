import React from 'react'
import isEmpty from '../assets/images/utils/Utils';
import { useSelector } from 'react-redux'
import { FormEditVehicule } from '../components/FormEditVehicule';
export const EditerVehiucle = () => {
  const vehicules = useSelector((state) => state.vehiculesReducer);

  return (
    <div>
      {!isEmpty(vehicules) && <FormEditVehicule/>}
    </div>
  )
}
