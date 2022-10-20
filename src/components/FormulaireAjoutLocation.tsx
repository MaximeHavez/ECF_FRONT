import React, {useEffect, useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './FormulaireAjoutLocation.css'
import {Button} from "react-bootstrap";
import VehiculeType from "../models/VehiculeType";
import {Link, useParams} from "react-router-dom";
import {callVehiculeService} from "../services/vehiculeServices";


const FormulaireAjoutLocation = () => {

    const params = useParams();

    const [date, setDate] = useState<any>(new Date());
    const [duree, setDuree] = useState<number>(0)
    const [vehicule, setVehicule] =useState<VehiculeType>(new VehiculeType("","","","",0,"",""))

    const loue = "Loué"
    useEffect(() => {
        callVehiculeService.findVehiculeById(params.id as string).then(res => setVehicule(res))
    },[])

    function handleClickDate() {
        const duree = ((date[1]-date[0]+1)/86400000)
        setDuree(duree)
    }

    const calculPrix = vehicule.prix*duree;

    function handleClickValidationLoc() {

        setVehicule({...vehicule, disponibilite : loue})
        console.log(vehicule.disponibilite)
        callVehiculeService.updateVehicule(params.id as string, vehicule)
    }

    return(
      <>
          <div className="globalCalendar">

          <div className='app col s6 backgroundCalendar'>
              <h1 className='text-center titre'>Choisisser votre période de location</h1>
              <div className='calendar-container calendrier'>
                  <Calendar
                      onChange={setDate}
                      value={date}
                      selectRange={true}
                  />
              </div>
              {date.length > 0 ? (
                  <p className='text-center'>
                      <span className='bold'>Start:</span>{' '}
                      {date[0].toDateString()}
                      &nbsp;|&nbsp;
                      <span className='bold'>End:</span> {date[1].toDateString()}
                  </p>
              ) : (
                  <p className='text-center'>
                      <span className='bold'>Default selected date:</span>{' '}
                      {date.toDateString()}
                  </p>
              )}
              <Button onClick={handleClickDate}>Valider la période de location</Button>
          </div>
          <div className="backgroundCalendar">
              <p>La durée de la location est de {duree} jour(s)</p>
              <p>Pour un prix total de {calculPrix} €</p>
              <p>avec un prix à la journée de {vehicule.prix} €</p>
              <Link to="#"><Button onClick={handleClickValidationLoc}>Valider la location</Button></Link>
          </div>
          </div>

      </>
  )
}

export default FormulaireAjoutLocation;