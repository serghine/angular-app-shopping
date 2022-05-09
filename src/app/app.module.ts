import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsViewComponent } from './produits-view/produits-view.component';
import { SingleProduitComponent } from './produits-view/single-produit/single-produit.component';
import { FormProduitComponent } from './produits-view/form-produit/form-produit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FourToFourComponent } from './four-to-four/four-to-four.component';
import { ServiceProduitsService } from './services/service-produits.service';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignOutComponent } from './auth/sign-out/sign-out.component';
import { FormAuthSignInComponent } from './auth/form-auth-sign-in/form-auth-sign-in.component';
import { FormAuthSignOutComponent } from './auth/form-auth-sign-out/form-auth-sign-out.component';
import { ServiceAuthentificationService } from './services/service-authentification.service';
import { ServiceAuthGardService } from './services/service-auth-gard.service';

const appRoute:Routes=[
  {path:"produits",component:ProduitsViewComponent},
  {path:"produits/new",component:FormProduitComponent},
  {path:"produits/view/:id",component:SingleProduitComponent},
  {path:"not-found",component:FourToFourComponent},
  {path:"**",redirectTo:'/not-found'},

]

@NgModule({
  declarations: [
    AppComponent,
    ProduitsViewComponent,
    SingleProduitComponent,
    FormProduitComponent,
    SignInComponent,
    SignOutComponent,
    FormAuthSignInComponent,
    FormAuthSignOutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [ServiceProduitsService,ServiceAuthentificationService,ServiceAuthGardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
