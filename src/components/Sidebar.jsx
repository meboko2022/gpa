import React from "react";
import "../styles/sidebarstyle.scss";
import Logo from "../assets/images/MS-04.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faColumns,
  faPlus,
  faUniversity,
  faArrowRight,
  faCar,
  faPeace,
  faMapMarked
} from "@fortawesome/free-solid-svg-icons";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo_space">
        <img src={Logo} alt="logo ministère" />
      </div>
      <div className="sidebar_menu">
        <NavLink
          to=""
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          <FontAwesomeIcon icon={faColumns} className="fa_font" />
          <span>Tableau de bord</span>
        </NavLink>
        <NavLink
          to=""
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          <FontAwesomeIcon icon={faPlus} className="fa_font" />
          <span>Faire une demande</span>
        </NavLink>
        <NavLink
          to="/institutions"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          <FontAwesomeIcon icon={faUniversity} className="fa_font" />
          <span>Gestion des institutions</span>
        </NavLink>
        <NavLink to="/niveauInstitution" className="navDown">
          <FontAwesomeIcon icon={faArrowRight} className="fa_font" />
          <span>Gestion des niveaux</span>
        </NavLink>
        <NavLink to="/ajouterInstitution" className="navDown">
          <FontAwesomeIcon icon={faArrowRight} className="fa_font" />
          <span>Ajouter une institution</span>
        </NavLink>
        <NavLink
          to="/vehicules"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          <FontAwesomeIcon icon={faCar} className="fa_font" />
          <span>Gestion des véhicules</span>
        </NavLink>
        <NavLink
          to="/chauffeur"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          <FontAwesomeIcon icon={faPeace} className="fa_font" />
          <span>Gestion des Chauffeurs</span>
        </NavLink>
        <NavLink
          to="/vehicules"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          <FontAwesomeIcon icon={faMapMarked} className="fa_font" />
          <span>Gestion des lieux</span>
        </NavLink>
      </div>
    </div>
  );
};
