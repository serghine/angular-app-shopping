import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../Model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceProduitsService {

  produits: Produit[] = [];

  constructor(private httpClient: HttpClient) { }

  getAllProduits() {
    this.httpClient.get<Produit[]>("http://localhost:8080/vilageEmplois/afficherProduits")
      .subscribe((produits: any) => {
        this.produits = produits;
        console.log(produits);
      })
  }


}
