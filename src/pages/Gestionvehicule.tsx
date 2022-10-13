import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {callVehiculeService} from "../services/vehiculeServices";
import VehiculeType from "../models/VehiculeType";
import VehiculeCard from "../layouts/VehiculeCard";

const Gestionvehicule = () => {

    const [vehicules, setVehicule] = useState<VehiculeType[]>( [])

    useEffect(() => {
        callVehiculeService.findAllVehicule().then(res => setVehicule(res))
    },[])

    return(
        <>
            <Link className="btn-floating right btn-large waves-effect waves-light red" to="/FormulaireAjoutVehicule"><i className="material-icons">+</i></Link>
            {vehicules.map((item,index)  =>
                <>
                    <VehiculeCard key={index} vehicule={item}/>
                </>

            )}
        </>
    )
}

export default Gestionvehicule;