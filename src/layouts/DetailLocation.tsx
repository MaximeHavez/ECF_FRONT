import React, {useEffect, useState} from "react";

import {Link, useParams} from "react-router-dom";
import {LocationType} from "../models/LocationType";
import {callRentService} from "../services/locationServices";
import {callUsersService} from "../services/usersServices";
import UserType from "../models/UserType";
import VehiculeType from "../models/VehiculeType";
import {callVehiculeService} from "../services/vehiculeServices";

const DetailLocation = () => {

    const params = useParams();

    const [location, setLocation] = useState<LocationType>(new LocationType(new Date,new Date,0,"",""))
    const [locataire, setLocataire] = useState<UserType>(new UserType("","","","",0))
    const [vehicule, setVehicule] = useState<VehiculeType>(new VehiculeType("","","","",0,"","", ""))

    useEffect(() => {
        callRentService.findRentById(params.id as string).then(res => setLocation(res))
    }, [])

    useEffect(() => {
        callUsersService.findUserById(location.locataire).then(res => setLocataire(res))
    },[location])

    useEffect(() => {
        callVehiculeService.findVehiculeById(location.vehicule).then(res => setVehicule(res))
    },[])

    return(
        <>
            <div className="row">
                <div className="col s12 m7">
                    <div className="card blue-grey darken-1">
                        <div className="card-image">
                            <img className="logoloca" src={require(`../assets/voiture1.png`)}/>
                                <span className="card-title blue-grey darken-1">{vehicule.marque} {vehicule.modele}</span>
                        </div>
                        <div className="card-content white-text">
                            <p>Vehicule loué par {locataire.prenom} {locataire.nom}</p>
                            <p>Marque du véhicule : {vehicule.marque}</p>
                            <p>Modéle du véhicule : {vehicule.modele}</p>
                            <p>Immatriculation du véhicule : {vehicule.immatriculation}</p>
                        </div>
                        <div className="card-action">
                            <Link to="#">Modifier le location</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailLocation;