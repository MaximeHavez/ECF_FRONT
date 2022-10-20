import React, {useEffect, useState} from "react";
import {LocationType} from "../models/LocationType";
import {callRentService} from "../services/locationServices";
import LocationCard from "../layouts/LocationCard";
import VehiculeType from "../models/VehiculeType";
import UserType from "../models/UserType";
import {callUsersService} from "../services/usersServices";
import {callVehiculeService} from "../services/vehiculeServices";
import {Link} from "react-router-dom";

const GestionLocation = () => {

    const [locations, setLocations] = useState<LocationType[]>([])


    useEffect(() => {
        callRentService.findAll().then(res => setLocations(res))
    }, [])



    return(
        <>


            {locations.map((item,index) => <LocationCard key={index} location={item}/>)}
        </>
    )
}

export default GestionLocation;