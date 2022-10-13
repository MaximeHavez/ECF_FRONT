import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import VehiculeType from "../models/VehiculeType";
import {callVehiculeService} from "../services/vehiculeServices";

const FormulaireModif = () => {

    const params = useParams();

    const [marque, setMarque] = useState<string>("")
    const [modele, setModele] = useState<string>("")
    const [immatriculation, setImmatriculation] = useState<string>("")
    const [etat, setEtat] = useState("")
    const [prix, setPrix] = useState(0)
    const [disponibilite, setDisponibilite] = useState("")
    const [typeVehicule, setTypeVehicule] = useState("")
    const [newVehicule, setNewVehicule] = useState<VehiculeType>(new VehiculeType("","","","",0,"",""))

    const [vehicules, setVehicule] = useState<VehiculeType[]>( [])

    useEffect(() => {
        callVehiculeService.findVehiculeById(params.id as string).then(res => setNewVehicule(res))
    },[])

    const changeMarque = (event : any) => {
        event.preventDefault()
        setMarque(event.target.value)
        setNewVehicule({...newVehicule, marque:event.target.value})
    }

    const changeModele = (event : any) => {
        event.preventDefault()
        setModele(event.target.value)
        setNewVehicule({...newVehicule, modele:event.target.value})
    }

    const changeImmat = (event : any) => {
        event.preventDefault()
        setImmatriculation(event.target.value)
        setNewVehicule({...newVehicule, immatriculation:event.target.value})
    }

    const changeEtat = (event : any) => {
        event.preventDefault()
        setEtat(event.target.value)
        setNewVehicule({...newVehicule, etat:event.target.value})
    }

    const changePrix = (event : any) => {
        event.preventDefault()
        setPrix(event.target.value)
        setNewVehicule({...newVehicule, prix:event.target.value})
    }

    const changeType = (event : any) => {
        event.preventDefault()
        setTypeVehicule(event.target.value)
        setNewVehicule({...newVehicule, typevehicule:event.target.value})
    }

    const changeDispo = (event : any) => {
        event.preventDefault()
        setDisponibilite(event.target.value)
        setNewVehicule({...newVehicule, disponibilite:event.target.value})
    }

    const handleSubmit = () => {
        callVehiculeService.updateVehicule(params.id as string,newVehicule)
    }


    return(
        <>
            <div className="row">
                <div className="input-field col s6">
                    <input value={newVehicule.marque} onChange={changeMarque} id="marque" type="text" className="validate"/>
                    <label className="active" htmlFor="marque">Marque du véhicule</label>
                </div>

                <div className="input-field col s6">
                    <input value={newVehicule.modele} onChange={changeModele} id="modele" type="text" className="validate"/>
                    <label className="active" htmlFor="modele">Modele du véhicule</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                    <input value={newVehicule.immatriculation} onChange={changeImmat} id="immatriculation" type="text" className="validate"/>
                    <label className="active" htmlFor="immatriculation">Immatriculation</label>
                </div>

                <div className="input-field col s6">
                    <input value={newVehicule.etat} onChange={changeEtat} id="etat" type="text" className="validate"/>
                    <label className="active" htmlFor="etat">Etat du véhicule : A, B, C, D</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                    <input value={newVehicule.prix} onChange={changePrix} id="prix" type="number" className="validate"/>
                    <label className="active" htmlFor="prix">Prix de la location</label>
                </div>

                <div className="input-field col s6">
                    <input value={newVehicule.typevehicule} onChange={changeType} id="type" type="text" className="validate"/>
                    <label className="active" htmlFor="type">Type de véhicule</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                    <input value={newVehicule.disponibilite} onChange={changeDispo} id="dispo" type="Text" className="validate"/>
                    <label className="active" htmlFor="dispo">Disponibilité</label>
                </div>
            </div>


            <Link to="/Gestionvehicule"><Button className="waves-effect waves-light btn" onClick={handleSubmit}>Mettre à jour le véhicule</Button></Link>
        </>
    )
}

export default FormulaireModif;