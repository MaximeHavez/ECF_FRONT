import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Gestionlocataires from "./pages/Gestionlocataires";
import DetailLocataire from "./layouts/DetailLocataire";
import FormulaireModif from "./components/FormulaireModif";
import FormulaireAjout from "./components/FormulaireAjout";
import Gestionvehicule from "./pages/Gestionvehicule";
import DetailVehicule from "./layouts/DetailVehicule";
import FormulaireAjoutVehicule from "./components/FormulaireAjoutVehicule";
import FormulaireModifVehicule from "./components/FormulaireModifVehicule";
import localib from "./assets/images/localib.png"
import GestionLocation from "./pages/GestionLocation";
import DetailLocation from "./layouts/DetailLocation";
import FormulaireAjoutLocation from "./components/FormulaireAjoutLocation";



function App() {


    return (
        <>
            <Router>
                <nav>
                    <div className="nav-wrapper blue darken-4">
                        <Link to="/" className="brand-logo "><img className="logoloca" src={localib}/></Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/Gestionlocataires">Gestion des locataires</Link></li>
                            <li><Link to="/Gestionvehicule">Gestion de la flotte</Link></li>
                            <li><Link to="/GestionLocation">Gestion des locations</Link></li>
                        </ul>
                    </div>
                </nav>

                <Routes>
                    <Route path="/Gestionlocataires" element={<Gestionlocataires/>}/>
                    <Route path="/Gestionvehicule" element={<Gestionvehicule/>}/>
                    <Route path="/GestionLocation" element={<GestionLocation/>}/>
                    <Route path="/DetailLocataire/:id" element={<DetailLocataire/>}/>
                    <Route path="/DetailVehicule/:id" element={<DetailVehicule/>}/>
                    <Route path="/DetailLocation/:id" element={<DetailLocation/>}/>
                    <Route path="/FormulaireModif/:id" element={<FormulaireModif/>}/>
                    <Route path="/FormulaireModifVehicule/:id" element={<FormulaireModifVehicule/>}/>
                    <Route path="/FormulaireAjout" element={<FormulaireAjout/>}/>
                    <Route path="/FormulaireAjoutLocation/:id" element={<FormulaireAjoutLocation/>}/>
                    <Route path="/FormulaireAjoutVehicule" element={<FormulaireAjoutVehicule/>}/>

                </Routes>
            </Router>


        </>
    )
}

export default App;
