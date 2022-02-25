import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import isEmpty from '../assets/images/utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteVehicule } from '../actions/vehicules.action'
import { useDispatch } from 'react-redux'


export const Vehicule = () => {
  const dispatch = useDispatch()
  const vehicules = useSelector((state) => state.vehiculesReducer)
  console.log(vehicules)
  return (
    <div>
      <h1 className="page_title">Véhicules</h1>
      <Link to="/ajouterVehicule">
        <button type="button" className="button">
          Ajouter un nouveau véhicule
        </button>
      </Link>

      <div className="space-table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Immatriculation</th>
              <th scope="col">Marque</th>
              <th scope="col">Modèle</th>
              <th scope="col">Etat du véhicule</th>
              <th scope="col">Institution d'appartenance</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {!isEmpty(vehicules) &&
              vehicules.map((vehicule) => (
                <tr key={vehicule.id} id={vehicule.id}>
                  <td>{vehicule.immatriculation}</td>
                  <td>{vehicule.marque}</td>
                  <td>{vehicule.modele}</td>
                  <td>{vehicule.etatActuel}</td>
                  <td>{vehicule.institution.libelle}</td>
                  <td>
                    <Link to={`/editerVehicule/${vehicule.id}`}>
                      <button>
                        <FontAwesomeIcon icon={faEdit} className="fa_font" />
                      </button>
                    </Link>

                    <button onClick={() => dispatch(deleteVehicule(vehicule.id))} >
                      <FontAwesomeIcon icon={faTrash} className="fa_font" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
