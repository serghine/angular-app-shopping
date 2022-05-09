import { Categorie } from "./categorie.model";


export class Produit{

constructor(public id:number,
           public name:string,
           public prix:number,
           public description:string,
           public categorie:Categorie ){}

}




