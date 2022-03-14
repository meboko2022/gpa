import React from "react";
import { Routes, Route } from "react-router-dom";
import { AjouterInstitution } from "../pages/AjouterInstitution";
import { EditerInstitution } from "../pages/EditerInstitution";
import { Structure } from "../pages/Structure";
import { AjouterStructure } from "../pages/AjouterStructure";
import { EditerStructure } from "../pages/EditerStructure";
import { Institutions } from "../pages/Institutions";
import { NiveauInstitution } from "../pages/NiveauInstitution";
import {Vehicule} from "../pages/Vehicule";
import "../styles/homestyle.scss";
import { AjouterVehicules } from "../pages/AjouterVehicules";
import { EditerVehiucle } from "../pages/EditerVehiucle";
import { Chauffeur } from "../pages/Chauffeur";
import { AjouterChauffeur } from "../pages/AjouterChauffeur";
import { TypeUtilisateur } from "../pages/TypeUtilisateur";
import { AjouterTypeUtilisateur } from "../pages/AjouterTypeUtilisateur";
import { EditerTypeUtilisateur } from "../pages/EditerTypeUtilisateur";
import { Utilisateur } from "../pages/Utilisateur";
import { AjouterUtilisateur } from "../pages/AjouterUtilisateur";
import { EditerUtilisateur } from "../pages/EditerUtilisateur";
import {EditerNiveau} from "../pages/EditerNiveau"





export const Home = () => {
  return (
    <div className="home">
      <Routes>
        <Route path="/niveauInstitution" element={<NiveauInstitution />} />
        <Route path="/editerNiveau/:id" element={<EditerNiveau/>} />
        <Route path="/editerVehicule/:id" element={<EditerVehiucle/>} />
        <Route path="/institutions" element={<Institutions/>} />
        <Route path="/structure" element={<Structure/>} />
        <Route path="/editerStructure/:id" element={<EditerStructure/>} />
        <Route path="/ajouterStructure" element={<AjouterStructure/>} />
        <Route path="/editer_institution/:id" element={<EditerInstitution/>} />
        <Route path="/ajouterInstitution" element={<AjouterInstitution/>} />
        <Route path="/vehicules" element={<Vehicule/>} />
        <Route path="/ajouterVehicule" element={<AjouterVehicules/>} />
        <Route path="/chauffeur" element={<Chauffeur/>} />
        <Route path="/ajouterChauffeur" element={<AjouterChauffeur/>} />
        <Route path="/typeUtilisateur" element={<TypeUtilisateur />} />
        <Route path="/ajouterTypeUtilisateur" element={<AjouterTypeUtilisateur/>} />
        <Route path="/editerTypeUtilisateur/:id" element={<EditerTypeUtilisateur/>} />
        <Route path="/utilisateur" element={<Utilisateur />} />
        <Route path="/ajouterUtilisateur" element={<AjouterUtilisateur/>} />
        <Route path="/editerUtilisateur/:id" element={<EditerUtilisateur/>} />
      </Routes>
    </div>
  );
};

