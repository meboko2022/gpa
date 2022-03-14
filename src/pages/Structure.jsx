import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, } from "@fortawesome/free-solid-svg-icons";
import isEmpty from "../assets/images/utils/Utils";
import { Link } from "react-router-dom";
import { deleteStructure } from "../actions/structure.action";


export const Structure = () => {
  const dispatch = useDispatch()
  const structures = useSelector((state) => state.structureReducer);
  return (
    <div>
      <h1 className="page_title">Structures</h1>
      <Link to={"/ajouterStructure"}>
        <button type="button" className="button">
          Ajouter une nouvelle structure
        </button>
      </Link>

      <div className="space-table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Institution</th>
              <th scope="col">Libellé</th>
              <th scope="col">Responsable</th>
              <th scope="col">Téléphone</th>
            </tr>
          </thead>
          <tbody>
            {!isEmpty(structures) &&
              structures.map((structure) => (
                <tr key={structure.id}>
                  <td>{structure.institution.libelle}</td>
                  <td>{structure.libelle}</td>
                  <td>{structure.responsable}</td>
                  <td>{structure.telephone}</td>
                  <td>
                    <Link to={`/editerStructure/${structure.id}`}>
                      <button>
                        <FontAwesomeIcon icon={faEdit} className="fa_font" />
                      </button>
                    </Link>

                    <button onClick={() => dispatch(deleteStructure(structure.id))} >
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

