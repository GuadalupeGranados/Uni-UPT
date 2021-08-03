import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SumaRoutingModule } from './suma-routing.module';
import { SumaComponent } from './suma.component';


@NgModule({
  declarations: [
    SumaComponent
  ],
  imports: [
    CommonModule,
    SumaRoutingModule
  ]
})
export class SumaModule { }
