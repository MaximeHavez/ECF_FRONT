import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import UserType from "../models/UserType";
import {callUsersService} from "../services/usersServices";
import {Button} from "react-bootstrap";



const DetailLocataire = () => {

    const params = useParams();



    const [currentUser, setCurrentUser] = useState<UserType>(new UserType("","","","",0))

    // Récupération d'un user par son id
    useEffect(() => {
        callUsersService.findUserById(params.id as string).then(res => setCurrentUser(res))
    },[])

    /**
     * Fonction permettant de supprimer un user avec le Call API
     */
    const deleteUser = () => {
        callUsersService.deleteUser(params.id as string)
    }


    return(
        <>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{currentUser.prenom} {currentUser.nom}</span>
                            <p>Adresse Mail : {currentUser.email}</p>
                            <p>Telephone : {currentUser.telephone}</p>
                            <p>Date de naissance : {currentUser.dateNaissance}</p>
                        </div>
                        <div className="card-action">
                            <Link to={`/FormulaireModif/${params.id}`}>Modifier</Link>
                            <Link to="/Gestionlocataires"><Button onClick={deleteUser}>Supprimer</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailLocataire;