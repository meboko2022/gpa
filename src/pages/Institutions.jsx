import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, } from "@fortawesome/free-solid-svg-icons";
import isEmpty from "../assets/images/utils/Utils";
import { Link } from "react-router-dom";
import { deleteInstitution } from "../actions/institutions.action";


export const Institutions = () => {
  const dispatch = useDispatch()
  const institutions = useSelector((state) => state.institutionsReducer);
  return (
    <div>
      <h1 className="page_title">Les institutions</h1>
      <Link to={"/ajouterInstitution"}>
        <button type="button" className="button">
          Ajouter une nouvelle institutions
        </button>
      </Link>

      <div className="space-table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Libelle de l'institution</th>
              <th scope="col">Niveau</th>
              <th scope="col">Nom chef Parc</th>
              <th scope="col">Email Chef Parc</th>
            </tr>
          </thead>
          <tbody>
            {!isEmpty(institutions) &&
              institutions.map((institution) => (
                <tr key={institution.id}>
                  <td>{institution.libelle}</td>
                  <td>{institution.niveau.libelle}</td>
                  <td>
                    {institution.nomChefParc} {institution.prenomChefParc}
                  </td>
                  <td>{institution.emailChefParc}</td>
                  <td>
                    <Link to={`/editer_institution/${institution.id}`}>
                      <button>
                        <FontAwesomeIcon icon={faEdit} className="fa_font" />
                      </button>
                    </Link>

                    <button onClick={() => dispatch(deleteInstitution(institution.id))} >
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

