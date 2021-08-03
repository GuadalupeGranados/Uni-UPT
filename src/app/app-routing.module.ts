import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SobreComponent} from './pages/sobre/sobre.component';
import {ContactoComponent} from './pages/contacto/contacto.component';
import {InicioComponent} from './pages/inicio/inicio.component';
import {SaludoComponent} from './pages/saludo/saludo.component';
import {PublicacionesComponent} from './pages/publicaciones/publicaciones.component';
import {SumaComponent} from './pages/suma/suma.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'suma',
    component: SumaComponent
  },
  {
    path: 'publicaciones',
    loadChildren: () => import('./pages/publicaciones/publicaciones-routing.module').then( m => m.PublicacionesRoutingModule)
  },
  {
    path: 'saludo',
    loadChildren: () => import('./pages/saludo/saludo-routing.module').then( m => m.SaludoRoutingModule)
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
