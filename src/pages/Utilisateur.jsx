import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import isEmpty from '../assets/images/utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteUtilisateur } from '../actions/utilisateur.action'
import { useDispatch } from 'react-redux'


export const Utilisateur = () => {
  const dispatch = useDispatch()
  const utilisateurs = useSelector((state) => state.utilisateurReducer)
  console.log(utilisateurs)
  return (
    <div>
      <h1 className="page_title">Utilisateurs</h1>
      <Link to="/ajouterUtilisateur">
        <button type="button" className="button">
          Ajouter un nouveau utilisateur
        </button>
      </Link>

      <div className="space-table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Structure</th>
              <th scope="col">Nom</th>
              <th scope="col">Prénom</th>
              <th scope="col">Statut du compte</th>

            </tr>
          </thead>
          <tbody>
            {!isEmpty(utilisateurs) &&
              utilisateurs.map((utilisateur) => (
                <tr key={utilisateur.id} id={utilisateur.id}>
                  <td>{utilisateur.structure}</td>
                  <td>{utilisateur.nom}</td>
                  <td>{utilisateur.prenom}</td>
                  <td>{utilisateur.statutCompte}</td>
                  <td>
                    <Link to={`/editerUtilisateur/${utilisateur.id}`}>
                      <button>
                        <FontAwesomeIcon icon={faEdit} className="fa_font" />
                      </button>
                    </Link>

                    <button onClick={() => dispatch(deleteUtilisateur(utilisateur.id))} >
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
