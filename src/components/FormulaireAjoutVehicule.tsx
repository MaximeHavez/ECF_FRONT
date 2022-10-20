import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import VehiculeType from "../models/VehiculeType";
import {callVehiculeService} from "../services/vehiculeServices";


const FormulaireAjoutVehicule = () => {

    const [marque, setMarque] = useState<string>("")
    const [modele, setModele] = useState<string>("")
    const [immatriculation, setImmatriculation] = useState<string>("")
    const [etat, setEtat] = useState("")
    const [prix, setPrix] = useState(0)
    const [disponibilite, setDisponibilite] = useState("")
    const [typeVehicule, setTypeVehicule] = useState("")
    const [newVehicule, setNewVehicule] = useState<VehiculeType>(new VehiculeType("","","","",0,"","", ""))

    const [vehicules, setVehicule] = useState<VehiculeType[]>( [])

    useEffect(() => {
        callVehiculeService.findAllVehicule().then(res => setVehicule(res))
    },[])

    /**
     * Fonction récupérant la valeur saisie de la marque et l'enregistre dans le state du newVehicule
     * @param event
     */
    const changeMarque = (event : any) => {
        event.preventDefault()
        setMarque(event.target.value)
        setNewVehicule({...newVehicule, marque:event.target.value})
    }

    /**
     * Fonction récupérant la valeur saisie du modele et l'enregistre dans le state du newVehicule
     * @param event
     */
    const changeModele = (event : any) => {
        event.preventDefault()
        setModele(event.target.value)
        setNewVehicule({...newVehicule, modele:event.target.value})
    }

    /**
     * Fonction récupérant la valeur saisie de l'immatriculation et l'enregistre dans le state du newVehicule
     * @param event
     */
    const changeImmat = (event : any) => {
        event.preventDefault()
        setImmatriculation(event.target.value)
        setNewVehicule({...newVehicule, immatriculation:event.target.value})
    }

    /**
     * Fonction récupérant la valeur saisie de l'état' et l'enregistre dans le state du newVehicule
     * @param event
     */
    const changeEtat = (event : any) => {
        event.preventDefault()
        setEtat(event.target.value)
        setNewVehicule({...newVehicule, etat:event.target.value})
    }

    /**
     * Fonction récupérant la valeur saisie du prix et l'enregistre dans le state du newVehicule
     * @param event
     */
    const changePrix = (event : any) => {
        event.preventDefault()
        setPrix(event.target.value)
        setNewVehicule({...newVehicule, prix:event.target.value})
    }

    /**
     * Fonction récupérant la valeur saisie du type et l'enregistre dans le state du newVehicule
     * @param event
     */
    const changeType = (event : any) => {
        event.preventDefault()
        setTypeVehicule(event.target.value)
        setNewVehicule({...newVehicule, typevehicule:event.target.value})
    }

    /**
     * Fonction récupérant la valeur saisie de la disponibilité et l'enregistre dans le state du newVehicule
     * @param event
     */
    const changeDispo = (event : any) => {
        event.preventDefault()
        setDisponibilite(event.target.value)
        setNewVehicule({...newVehicule, disponibilite:event.target.value})
    }

    /**
     * Fonction permettant d'envoyer un nouveau véhicule dans le JSON
     */
    const handleSubmit = () => {
        console.log(newVehicule)
        setVehicule([...vehicules,newVehicule])
        callVehiculeService.addVehicule(newVehicule)
    }

    return(
        <>
            <div className="row">
                <div className="input-field col s6">
                    <input onChange={changeMarque} id="marque" type="text" className="validate"/>
                    <label className="active" htmlFor="marque">Marque du véhicule</label>
                </div>

                <div className="input-field col s6">
                    <input onChange={changeModele} id="modele" type="text" className="validate"/>
                    <label className="active" htmlFor="modele">Modele du véhicule</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                    <input onChange={changeImmat} id="immatriculation" type="text" className="validate"/>
                    <label className="active" htmlFor="immatriculation">Immatriculation</label>
                </div>

                <div className="input-field col s6">
                    <input onChange={changeEtat} id="etat" type="text" className="validate"/>
                    <label className="active" htmlFor="etat">Etat du véhicule : A, B, C, D</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                    <input onChange={changePrix} id="prix" type="number" className="validate"/>
                    <label className="active" htmlFor="prix">Prix de la location</label>
                </div>

                <div className="input-field col s6">
                    <input onChange={changeType} id="type" type="text" className="validate"/>
                    <label className="active" htmlFor="type">Type de véhicule</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                    <input onChange={changeDispo} id="dispo" type="Text" className="validate"/>
                    <label className="active" htmlFor="dispo">Disponibilité</label>
                </div>
            </div>


            <Link to="/Gestionvehicule"><Button className="waves-effect waves-light btn" onClick={handleSubmit}>Enregistrer le nouveau véhicule</Button></Link>
        </>
    )
}

export default FormulaireAjoutVehicule;