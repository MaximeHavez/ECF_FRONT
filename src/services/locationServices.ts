import {LocationType} from "../models/LocationType";


export class locationServices  {

    /* Une fonction qui est utilisée pour trouver tous les emplacements dans la base de données. */
    findAll = async () => {
        const response =  await fetch('http://localhost:3000/locations');
        const data = await response.json();
        return data;
    }

    /* Une fonction qui est utilisée pour trouver une location par son identifiant. */
    findRentById = async (id:string) => {
        const response =  await fetch(`http://localhost:3000/locations/${id}`);
        const data = await response.json();
        return data;
    }

    /* Suppression de la location de la base de données. */
    deleteRent = async (id:string) => {
        return  fetch(`http://localhost:3000/locations/${id}`, { method: 'DELETE' })
    }

    /* Ajout d'un nouvel emplacement à la base de données. */
    addRent = (location : LocationType) => {
        return fetch('http://localhost:3000/locations', {
            method:'POST',
            body: JSON.stringify(location),
            headers:{'Content-type':'application/json'}
        })
            .then(response => response.json())
    }

    /* Mise à jour de la location. */
    updateRent = async (id:string, location : LocationType) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(location)
        };
        fetch(`http://localhost:3000/location/${id}`, requestOptions)
            .then(response => response.json())
    }


}

export const callRentService = Object.freeze(new locationServices())