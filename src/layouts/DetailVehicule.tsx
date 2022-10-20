import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import VehiculeType from "../models/VehiculeType";
import {callVehiculeService} from "../services/vehiculeServices";

const DetailVehicule = () => {

    const params = useParams();
    const [currentVehicule, setCurrentVehicule] = useState<VehiculeType>(new VehiculeType("","","","",0,"","", ""))

    // Récupération d'un véhicule par son id
    useEffect(() => {
        callVehiculeService.findVehiculeById(params.id as string).then(res => setCurrentVehicule(res))
    },[])

    /**
     * Fonction permettant de supprimer un vehicule avec le Call API
     */
    const deleteVehicule = () => {
        callVehiculeService.deleteVehicule(params.id as string)
    }

    return(
        <>
            <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{currentVehicule.marque} {currentVehicule.modele}</span>
                        <p>Immatriculation : {currentVehicule.immatriculation}</p>
                        <p>Type de véhicule : {currentVehicule.typevehicule}</p>
                        <p>Prix de la location : {currentVehicule.prix}</p>
                        <p>Etat du véhicule : {currentVehicule.etat}</p>
                        <p>Disponibilité : {currentVehicule.disponibilite}</p>
                    </div>
                    <div className="card-action">
                        <Link to={`/FormulaireModifVehicule/${params.id}`}>Modifier</Link>
                        {currentVehicule.disponibilite == "Disponible" ? <Link to={`/FormulaireAjoutLocation/${params.id}`}>Louer ce véhicule</Link> : null}

                        <Link to="/Gestionvehicule"><Button onClick={deleteVehicule}>Supprimer</Button></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DetailVehicule;