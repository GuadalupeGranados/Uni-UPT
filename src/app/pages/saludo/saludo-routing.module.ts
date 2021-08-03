import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SaludoComponent} from './saludo.component';
const routes: Routes = [
  {
    path: '',
    component: SaludoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaludoRoutingModule { }
