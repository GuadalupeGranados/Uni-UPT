import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule } from '@angular/common';
import {SobreComponent} from './sobre/sobre.component';
import {ContactoComponent} from './contacto/contacto.component';
import {InicioComponent} from './inicio/inicio.component';
import {PublicacionesComponent} from './publicaciones/publicaciones.component';
import {SaludoComponent } from './saludo/saludo.component';
import {SumaComponent } from './suma/suma.component';

@NgModule({
  declarations: [
    InicioComponent,
    SobreComponent,
    ContactoComponent,
    PublicacionesComponent,
    SaludoComponent,
    SumaComponent,
  ],
  exports: [
    InicioComponent,
    SobreComponent,
    ContactoComponent,
    PublicacionesComponent,
    SaludoComponent,
    SumaComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
  ]
})
export class PagesModule { }
