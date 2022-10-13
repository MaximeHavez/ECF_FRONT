import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import UserType from "../models/UserType";
import {callUsersService} from "../services/usersServices";



const DetailLocataire = () => {

    const params = useParams();



    const [currentUser, setCurrentUser] = useState<UserType>(new UserType("","",new Date,"",0))


    useEffect(() => {
        callUsersService.findUserById(params.id as string).then(res => setCurrentUser(res))
    },[])


    return(
        <>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{currentUser.prenom} {currentUser.nom}</span>
                            <p>Adresse Mail : {currentUser.email}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailLocataire;