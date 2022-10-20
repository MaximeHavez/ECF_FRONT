export default class VehiculeType {
    id:number;
    public static IdUser = 0;
    marque:string;
    modele:string;
    immatriculation:string;
    etat:string;
    prix:number;
    disponibilite:string;
    typevehicule:string
    imgVehi : string


    constructor(marque: string, modele: string, immatriculation: string, etat: string, prix: number, disponibilite: string, typevehicule: string, imgVehi:string) {
        this.id = VehiculeType.IdUser++;
        this.marque = marque;
        this.modele = modele;
        this.immatriculation = immatriculation;
        this.etat = etat;
        this.prix = prix;
        this.disponibilite = disponibilite;
        this.typevehicule = typevehicule;
        this.imgVehi = imgVehi;
    }
}