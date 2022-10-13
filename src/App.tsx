import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Gestionlocataires from "./pages/Gestionlocataires";
import DetailLocataire from "./layouts/DetailLocataire";


function App() {


    return (
        <>
            <Router>
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">Localib</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/Gestionlocataires">Gestion des locataires</Link></li>
                            <li><Link to="/GestionFlotte">Gestion de la flotte</Link></li>
                        </ul>
                    </div>
                </nav>

                <Routes>
                    <Route path="/Gestionlocataires" element={<Gestionlocataires/>}/>
                    <Route path="/DetailLocataire/:id" element={<DetailLocataire/>}/>
                </Routes>
            </Router>


        </>
    )
}

export default App;
