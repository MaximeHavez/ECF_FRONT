import UserType from "./UserType";
import VehiculeType from "./VehiculeType";
import uuid from "react-uuid";

export class LocationType {
    id : string
    debut : any
    fin : any
    prixTotal : number
    locataire : string
    vehicule : string


    public static idLocation = 0;

    constructor(debut: any, fin: any, prixTotal: number, locataire:string, vehicule:string) {
        this.debut = debut;
        this.fin = fin;
        this.prixTotal = prixTotal;
        this.id = uuid();
        this.locataire = locataire;
        this.vehicule = vehicule;

    }

}