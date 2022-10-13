import React from "react";
import UserType from "../models/UserType";
import {Link} from "react-router-dom";

export type propsType = {
    user:UserType;
}

const userCard = (props : propsType) => {


    return(
        <>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{props.user.nom} {props.user.prenom}</span>
                            <p>{props.user.email}</p>
                        </div>
                        <div className="card-action">
                            <Link to={`/DetailLocataire/${props.user.id}`}>AFFICHER LE LOCATAIRE</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default userCard;