import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import UserType from "../models/UserType";
import {callUsersService} from "../services/usersServices";
import {Link} from "react-router-dom";

const FormulaireAjout = () => {

    const [users, setUsers] = useState<UserType[]>( [])
    const [nom, setNom] = useState<string>("")
    const [prenom, setPrenom] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [tel, setTel] = useState(0)
    const [date, setDate] = useState(new Date())
    const [newUser, setNewUser] = useState<UserType>(new UserType("","","","",0))

    //Call API du serviceVehicule pour récupérer tous les Users
    useEffect(() => {
        callUsersService.findAll().then(res => setUsers(res))
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
     * Fonction récupérant la valeur du nom saisie et l'enregistre dans le state du newUser
     */
    const changeNom = (event : any) => {
        event.preventDefault()
        setNom(event.target.value)
        setNewUser({...newUser, nom:event.target.value})
    }

    /**
     * Fonction récupérant la valeur du mail saisie et l'enregistre dans le state du newUser
     */
    const changeEmail = (event : any) => {
        event.preventDefault()
        setEmail(event.target.value)
        setNewUser({...newUser, email:event.target.value})
    }

    /**
     * Fonction récupérant la valeur du telephone saisie et l'enregistre dans le state du newUser
     */
    const changeTel = (event : any) => {
        event.preventDefault()
        setTel(event.target.value)
        setNewUser({...newUser, telephone:event.target.value})
    }

    /**
     * Fonction récupérant la valeur de la date saisie et l'enregistre dans le state du newUser
     */
    const changeDate = (event : any) => {
        event.preventDefault()
        setDate(event.target.value)
        setNewUser({...newUser, dateNaissance:event.target.value})
    }

    /**
     * Fonction permettant d'envoyer un nouvel utilisateur dans le JSON
     */
    const handleSubmit = () => {
        setUsers([...users,newUser])
        callUsersService.addUser(newUser)
    }

    return(
        <>
            <div className="row">
                <div className="input-field col s6">
                    <input onChange={changePrenom} id="prenom" type="text" className="validate"/>
                    <label className="active" htmlFor="prenom">Prénom</label>
                </div>

                <div className="input-field col s6">
                    <input onChange={changeNom} id="nom" type="text" className="validate"/>
                    <label className="active" htmlFor="nom">Nom</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                    <input onChange={changeEmail} id="email" type="email" className="validate"/>
                    <label className="active" htmlFor="email">Email</label>
                </div>

                <div className="input-field col s6">
                    <input onChange={changeTel} id="Tel" type="number" className="validate"/>
                    <label className="active" htmlFor="Tel">Telephone</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                    <input onChange={changeDate} id="date" type="date" className="validate"/>
                    <label className="active" htmlFor="date">Date de naissance</label>
                </div>
            </div>

            <Link to="/Gestionlocataires"><Button className="waves-effect waves-light btn" onClick={handleSubmit}>Inscrire le nouveau locataire</Button></Link>
        </>
    )
}

export default FormulaireAjout;