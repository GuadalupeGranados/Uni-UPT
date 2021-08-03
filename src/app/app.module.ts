import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import {PagesModule} from './pages/pages.module';
import {AppRoutingModule} from './app-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RouterModule } from '@angular/router';
import { NoComponent } from './pages/no/no.component';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';
import { SaludoComponent } from './pages/saludo/saludo.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/Firestore';
import { AngularFireDatabaseModule} from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent],
entryComponents:[],

  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
