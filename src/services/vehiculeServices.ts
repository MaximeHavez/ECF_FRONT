import UserType from "../models/UserType";
import VehiculeType from "../models/VehiculeType";

export class vehiculeServices  {

    findAllVehicule = async () => {
        const response =  await fetch('http://localhost:3000/vehicules');
        const data = await response.json();
        return data;
    }

    findVehiculeById = async (id:string) => {
        const response =  await fetch(`http://localhost:3000/vehicules/${id}`);
        const data = await response.json();
        return data;
    }

    deleteVehicule = async (id:string) => {
      return  fetch(`http://localhost:3000/vehicules/${id}`, { method: 'DELETE' })
    }

    addVehicule = (Vehicule : VehiculeType) => {
        return fetch('http://localhost:3000/vehicules', {
            method:'POST',
            body: JSON.stringify(Vehicule),
            headers:{'Content-type':'application/json'}
        })
            .then(response => response.json())
    }

    updateVehicule = async (id:string, Vehicule : VehiculeType) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Vehicule)
        };
        fetch(`http://localhost:3000/vehicules/${id}`, requestOptions)
            .then(response => response.json())
    }


}

export const callVehiculeService = Object.freeze(new vehiculeServices())