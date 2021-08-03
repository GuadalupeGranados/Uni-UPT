import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SumaComponent} from './suma.component';
const routes: Routes = [
  {
    path: '',
    component: SumaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SumaRoutingModule { }
