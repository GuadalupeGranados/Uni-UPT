import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaludoRoutingModule } from './saludo-routing.module';
import { SaludoComponent } from './saludo.component';


@NgModule({
  declarations: [
    SaludoComponent
  ],
  imports: [
    CommonModule,
    SaludoRoutingModule
  ]
})
export class SaludoModule { }
