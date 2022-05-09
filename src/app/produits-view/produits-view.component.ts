import { Component, OnInit } from '@angular/core';
import { ServiceProduitsService } from '../services/service-produits.service';

@Component({
  selector: 'app-produits-view',
  templateUrl: './produits-view.component.html',
  styleUrls: ['./produits-view.component.scss']
})
export class ProduitsViewComponent implements OnInit {

  constructor(private serviceProduits: ServiceProduitsService) { }

  ngOnInit(): void {
  }

  afficherProduits() {
    this.serviceProduits.getAllProduits();
  }


}
