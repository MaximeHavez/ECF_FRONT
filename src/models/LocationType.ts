import UserType from "./UserType";
import VehiculeType from "./VehiculeType";

export class LocationType {
    id : number
    private _debut : string
    private _fin : string
    private _prixTotal : number
    private _locataire : string
    private _vehicule : string
    public static idLocation = 0;

    constructor(debut: string, fin: string, prixTotal: number, locataire:string, vehicule:string) {
        this._debut = debut;
        this._fin = fin;
        this._prixTotal = prixTotal;
        this.id = LocationType.idLocation++;
        this._locataire = locataire;
        this._vehicule = vehicule;
    }

    get debut(): string {
        return this._debut;
    }

    set debut(value: string) {
        this._debut = value;
    }

    get fin(): string {
        return this._fin;
    }

    set fin(value: string) {
        this._fin = value;
    }

    get prixTotal(): number {
        return this._prixTotal;
    }

    set prixTotal(value: number) {
        this._prixTotal = value;
    }


    get locataire(): string {
        return this._locataire;
    }

    set locataire(value: string) {
        this._locataire = value;
    }

    get vehicule(): string {
        return this._vehicule;
    }

    set vehicule(value: string) {
        this._vehicule = value;
    }
}