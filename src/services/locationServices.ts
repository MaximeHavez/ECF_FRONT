import {LocationType} from "../models/LocationType";


export class locationServices  {

    findAll = async () => {
        const response =  await fetch('http://localhost:3000/locations');
        const data = await response.json();
        return data;
    }

    findRentById = async (id:string) => {
        const response =  await fetch(`http://localhost:3000/locations/${id}`);
        const data = await response.json();
        return data;
    }

    deleteRent = async (id:string) => {
        return  fetch(`http://localhost:3000/locations/${id}`, { method: 'DELETE' })
    }

    addRent = (location : LocationType) => {
        return fetch('http://localhost:3000/locations', {
            method:'POST',
            body: JSON.stringify(location),
            headers:{'Content-type':'application/json'}
        })
            .then(response => response.json())
    }

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