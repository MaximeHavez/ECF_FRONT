import React, {useEffect, useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './FormulaireAjoutLocation.css'
import {Button} from "react-bootstrap";
import VehiculeType from "../models/VehiculeType";
import {Link, useParams} from "react-router-dom";
import {callVehiculeService} from "../services/vehiculeServices";
import {callRentService} from "../services/locationServices";
import {LocationType} from "../models/LocationType";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import UserType from "../models/UserType";
import {callUsersService} from "../services/usersServices";
import {stringify} from "querystring";



const FormulaireAjoutLocation = () => {

    const params = useParams();
    const idstr = params.id as string;

    const [date, setDate] = useState<any>("");
    const [newDate, setNewDate] = useState<any>()
    const [duree, setDuree] = useState<number>(0)
    const [vehicule, setVehicule] =useState<VehiculeType>(new VehiculeType("","","","",0,"","", ""))
    const [newLocation, setNewLocation] = useState<LocationType>(new LocationType("","",0,"",""))
    const [prixLocation, setPrixLocation] = useState<number>(0)
    const [locataires, setLocataires] = useState<UserType[]>([])
    const [idlocataire, setIdLocataire] = useState<string>("")
    const [idvehicule, setIdVehicule] = useState<string>("")
    const [image, setImage] = useState<string>("")





    const loue = "Loué"
    useEffect(() => {
        callVehiculeService.findVehiculeById(params.id as string).then(res => setVehicule(res))
    },[])

    useEffect(() => {
        callUsersService.findAll().then(res => setLocataires(res))
    }, [])

    /**
     * Il calcule la durée de la location et le prix de la location.
     */
    const handleClickDate = () => {
        const duree = ((newDate[1] -newDate[0]+1)/86400000)
        setDuree(duree)
        setVehicule({...vehicule, disponibilite : loue})
        setPrixLocation(vehicule.prix*duree)

    }

    /**
     * Une fonction qui gère le changement de l'identifiant du locataire.
     * @param {any} event - n'importe quel
     */
    const handleChange = (event:any) => {
        setIdLocataire(event.target.value)
        setIdVehicule(params.id as string)

        setNewLocation({...newLocation, debut : date[0], fin : date[1], prixTotal : prixLocation, locataire : event.target.value, vehicule : params.id as string })
    }

    /**
     * Il met à jour le véhicule et ajoute un nouveau loyer.
     */
    const handleClickValidationLoc = () => {
        callVehiculeService.updateVehicule(params.id as string, vehicule)
        callRentService.addRent(newLocation)
    }

    return(
      <>
          <div className="globalCalendar">

          <div className='app col s6 backgroundCalendar'>
              <h1 className='text-center titre'>Choisisser votre période de location</h1>
              <div className='calendar-container calendrier'>
                  <Calendar
                      onChange={setNewDate}
                      value={newDate}
                      selectRange={true}
                  />
              </div>
              {date.length > 0 ? (
                  <p className='text-center'>
                      <span className='bold'>Start:</span>{' '}
                      {date[0]}
                      &nbsp;|&nbsp;
                      <span className='bold'>End:</span> {date[1]}
                  </p>
              ) : (
                  <p className='text-center'>
                      <span className='bold'>Default selected date:</span>{' '}
                      {date.toString()}
                  </p>
              )}
              <Button onClick={handleClickDate}>Valider la période de location</Button>
          </div>
          <div className="backgroundCalendar">


              <FormControl fullWidth>
                  <InputLabel id="select_locataire-label">Locataire</InputLabel>
                  <Select
                      labelId="select_locataire-label"
                      id="select_locataire"
                      value={idlocataire}
                      label="Locataire"
                      onChange={handleChange}
                  >
                      <MenuItem value=" ">None</MenuItem>
                      {locataires.map((item, index) => <MenuItem key={index} value={item.id}>{item.nom} {item.prenom}</MenuItem>)}


                  </Select>
              </FormControl>


              <p>La durée de la location est de {duree} jour(s)</p>
              <p>Pour un prix total de {prixLocation} €</p>
              <p>avec un prix à la journée de {vehicule.prix} €</p>
              <Link to="#"><Button onClick={handleClickValidationLoc}>Valider la location</Button></Link>
          </div>
          </div>

      </>
  )
}

export default FormulaireAjoutLocation;