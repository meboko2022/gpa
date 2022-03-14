import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import isEmpty from "../assets/images/utils/Utils";
import { FormModal } from "../components/FormModal";
import { useDispatch } from "react-redux";
import { deleteNiveau } from "../actions/niveau.action";
export const NiveauInstitution = () => {
  const niveaux = useSelector((state) => state.niveauReducer);
  let dispatch = useDispatch();
  console.log(niveaux);
  return (
    <div>
      <h1 className="page_title">Niveau d'une institution</h1>
      <button
        type="button"
        className="button"
        data-bs-toggle="modal"
        data-bs-target="#formModal"
      >
        Ajouter un nouveau niveau
      </button>

      {/* tableau d'affichage des niveau */}

      <div className="space-table">
        <table
          className="table table-bordered"
          style={{ width: "fit-content" }}
        >
          <thead>
            <tr>
              <th scope="col">Niveau</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {!isEmpty(niveaux) &&
              niveaux.map((niveau) => (
                <tr key={niveau.id}>
                  <td>{niveau.libelle}</td>
                  <td>
                    <button>
                      <FontAwesomeIcon icon={faEdit} className="fa_font" />
                      Modifier
                    </button>

                    <button onClick={() => dispatch(deleteNiveau(niveau.id))}>
                      <FontAwesomeIcon icon={faTrash} className="fa_font" />
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <FormModal />
    </div>
  );
};

