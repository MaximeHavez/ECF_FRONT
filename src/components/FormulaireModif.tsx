import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import UserType from "../models/UserType";
import {callUsersService} from "../services/usersServices";
import {Link, useParams} from "react-router-dom";

const FormulaireModif = () => {

    const params = useParams();

    const [users, setUsers] = useState<UserType[]>( [])
    const [nom, setNom] = useState<string>("")
    const [prenom, setPrenom] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [tel, setTel] = useState(0)
    const [date, setDate] = useState(new Date())
    const [newUser, setNewUser] = useState<UserType>(new UserType("","","","",0))

    //Call API du serviceVehicule pour récupérer l'utilisateur sélectionné
    useEffect(() => {
        callUsersService.findUserById(params.id as string).then(res => setNewUser(res))
    },[])

    /**
     * Fonction récupérant la valeur saisie du prenom et l'enregistre dans le state du newUser
     */
    const changePrenom = (event : any) => {
        event.preventDefault()
        setPrenom(event.target.value)
        setNewUser({...newUser, prenom:event.target.value})
    }

    /**
     * Fonction récupérant la valeur saisie du nom et l'enregistre dans le state du newUser
     */
    const changeNom = (event : any) => {
        event.preventDefault()
        setNom(event.target.value)
        setNewUser({...newUser, nom:event.target.value})
    }

    /**
     * Fonction récupérant la valeur saisie du mail et l'enregistre dans le state du newUser
     */
    const changeEmail = (event : any) => {
        event.preventDefault()
        setEmail(event.target.value)
        setNewUser({...newUser, email:event.target.value})
    }

    /**
     * Fonction récupérant la valeur saisie du telephone et l'enregistre dans le state du newUser
     */
    const changeTel = (event : any) => {
        event.preventDefault()
        setTel(event.target.value)
        setNewUser({...newUser, telephone:event.target.value})
    }

    /**
     * Fonction récupérant la valeur saisie de la date et l'enregistre dans le state du newUser
     */
    const changeDate = (event : any) => {
        event.preventDefault()
        setDate(event.target.value)
        setNewUser({...newUser, dateNaissance:event.target.value})
    }


    const handleSubmit = () => {
        callUsersService.updateUser(params.id as string,newUser)
    }

    return(
        <>
            <div className="row">
                <div className="input-field col s6">
                    <input value={newUser.prenom} onChange={changePrenom} id="prenom" type="text" className="validate"/>
                        <label className="active" htmlFor="prenom">Prénom</label>
                </div>

                <div className="input-field col s6">
                    <input value={newUser.nom} onChange={changeNom} id="nom" type="text" className="validate"/>
                    <label className="active" htmlFor="nom">Nom</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                    <input value={newUser.email} onChange={changeEmail} id="email" type="email" className="validate"/>
                    <label className="active" htmlFor="email">Email</label>
                </div>

                <div className="input-field col s6">
                    <input value={newUser.telephone} onChange={changeTel} id="Tel" type="number" className="validate"/>
                    <label className="active" htmlFor="Tel">Telephone</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                    <input value={newUser.dateNaissance} onChange={changeDate} id="date" type="date" className="validate"/>
                    <label className="active" htmlFor="date">Date de naissance</label>
                </div>
            </div>

            <Link to={`/DetailLocataire/${newUser.id}`}><Button className="waves-effect waves-light btn" onClick={handleSubmit}>Modifier le locataire</Button></Link>
        </>
    )
}

export default FormulaireModif;