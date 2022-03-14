import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import isEmpty from '../assets/images/utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteTypeUtilisateur } from '../actions/typeUtilisateur.action'
import { useDispatch } from 'react-redux'


export const TypeUtilisateur = () => {
  const dispatch = useDispatch()
  const typeUtilisateurs = useSelector((state) => state.typeUtilisateurReducer)
  console.log(typeUtilisateurs)
  return (
    <div>
      <h1 className="page_title">Type Utilisateur</h1>
      <Link to="/AjouterTypeUtilisateur">
        <button type="button" className="button">
          Ajouter un nouveau Type d'utilisateur
        </button>
      </Link>

      <div className="space-table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Libellé</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {!isEmpty(TypeUtilisateur) &&
              typeUtilisateurs.map((typeUtilisateur) => (
                <tr key={typeUtilisateur.id} id={typeUtilisateur.id}>
                  <td>{typeUtilisateur.libelle}</td>                  
                  <td>
                    <Link to={`/editerTypeUtilisateur/${typeUtilisateur.id}`}>
                      <button>
                        <FontAwesomeIcon icon={faEdit} className="fa_font" />
                      </button>
                    </Link>

                    <button onClick={() => dispatch(deleteTypeUtilisateur(typeUtilisateur.id))} >
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
