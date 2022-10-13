import VehiculeType from "../models/VehiculeType";

export class vehiculeServices  {

    // récupére tous les véhicules
    findAllVehicule = async () => {
        const response =  await fetch('http://localhost:3000/vehicules');
        const data = await response.json();
        return data;
    }

    // récupére un véhicule par son id
    findVehiculeById = async (id:string) => {
        const response =  await fetch(`http://localhost:3000/vehicules/${id}`);
        const data = await response.json();
        return data;
    }

    // supprime un véhicule en tilisant son id
    deleteVehicule = async (id:string) => {
      return  fetch(`http://localhost:3000/vehicules/${id}`, { method: 'DELETE' })
    }

    // ajoute un vehicule dans le json
    addVehicule = (Vehicule : VehiculeType) => {
        return fetch('http://localhost:3000/vehicules', {
            method:'POST',
            body: JSON.stringify(Vehicule),
            headers:{'Content-type':'application/json'}
        })
            .then(response => response.json())
    }

    // Modifie un vehicule sélectionné par sno id
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