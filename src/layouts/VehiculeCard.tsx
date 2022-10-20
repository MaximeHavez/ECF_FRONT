import React from "react";
import {Link} from "react-router-dom";
import VehiculeType from "../models/VehiculeType";

export type propsType = {
    vehicule : VehiculeType;
}

const VehiculeCard = (props : propsType) => {


    return(



            <>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">{props.vehicule.marque} {props.vehicule.modele}</span>
                                <p>{props.vehicule.immatriculation}</p>
                                <p>{props.vehicule.disponibilite}</p>
                            </div>
                            <div className="card-action">
                                <Link to={`/DetailVehicule/${props.vehicule.id}`}>AFFICHER LE VEHICULE</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </>

    )
}

export default VehiculeCard;