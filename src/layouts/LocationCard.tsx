import React from "react";
import {LocationType} from "../models/LocationType";
import {Link} from "react-router-dom";

export type propsType = {
    location : LocationType
}

const LocationCard = (props : propsType) => {

    return(
      <>
          <div className="row">
              <div className="col s12 m6">
                  <div className="card blue-grey darken-1">
                      <div className="card-content white-text">
                          <span className="card-title">Numéro de location : {props.location.id}</span>
                          <p>Début de la location : {props.location.debut} </p>
                          <p>Fin de la location : {props.location.fin}</p>
                          <p>Locataire : {props.location.locataire}</p>
                          <p>Véhicule : {props.location.vehicule}</p>
                      </div>

                      <div className="card-action">
                          <Link to={`/DetailLocation/${props.location.id}`}>Voir la location</Link>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default LocationCard;