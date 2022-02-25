import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import isEmpty from "../assets/images/utils/Utils";
import { Link } from "react-router-dom";
import { deletteChauffeurs } from "../actions/chauffeurs.action";

export const Chauffeur = () => {
  const dispatch = useDispatch();
  const chauffeurs = useSelector((state) => state.chauffeurReducer);
  return (
    <div>
      <h1 className="page_title">Les chauffeurs</h1>
      <Link to={"/ajouterChauffeur"}>
        <button type="button" className="button">
          Ajouter un nouveau chauffeur
        </button>
      </Link>
      <div className="space-table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Nom et Prénom du chauffeur</th>
              <th scope="col">Contacts</th>
              <th scope="col">Institution d'appartenance</th>
              <th scope="col">Disponibilité</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {!isEmpty(chauffeurs) &&
              chauffeurs.map((chauffeur) => (
                <tr key={chauffeur.id}>
                  <td>{chauffeur.nom} {chauffeur.prenom}</td>
                  <td>{chauffeur.telephone}</td>
                  <td>{chauffeur.institution.libelle}</td>
                  <td>{chauffeur.etatChauffeur}</td>
                  <td>
                    <Link to="">
                      <button>
                        <FontAwesomeIcon icon={faEdit} className="fa_font" />
                      </button>
                    </Link>

                    <button onClick={() => dispatch(deletteChauffeurs(chauffeur.id))}  >
                      <FontAwesomeIcon icon={faTrash} className="fa_font" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
