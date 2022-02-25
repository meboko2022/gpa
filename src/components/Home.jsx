import React from "react";
import { Routes, Route } from "react-router-dom";
import { AjouterInstitution } from "../pages/AjouterInstitution";
import { EditerInstitution } from "../pages/EditerInstitution";
import { Institutions } from "../pages/Institutions";
import { NiveauInstitution } from "../pages/NiveauInstitution";
import {Vehicule} from "../pages/Vehicule"
import "../styles/homestyle.scss";
import { AjouterVehicules } from "../pages/AjouterVehicules";
import { EditerVehiucle } from "../pages/EditerVehiucle";
import { Chauffeur } from "../pages/Chauffeur";
import { AjouterChauffeur } from "../pages/AjouterChauffeur";


export const Home = () => {
  return (
    <div className="home">
      <Routes>
        <Route path="/niveauInstitution" element={<NiveauInstitution />} />
        <Route path="/institutions" element={<Institutions/>} />
        <Route path="/editer_institution/:id" element={<EditerInstitution/>} />
        <Route path="/ajouterInstitution" element={<AjouterInstitution/>} />
        <Route path="/vehicules" element={<Vehicule/>} />
        <Route path="/ajouterVehicule" element={<AjouterVehicules/>} />
        <Route path="/editerVehicule/:id" element={<EditerVehiucle/>} />
        <Route path="/chauffeur" element={<Chauffeur/>} />
        <Route path="/ajouterChauffeur" element={<AjouterChauffeur/>} />
      </Routes>
    </div>
  );
};
