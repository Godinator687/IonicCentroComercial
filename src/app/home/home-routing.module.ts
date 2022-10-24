import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentroComercialPage } from '../centro-comercial/centro-comercial.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
  //añadimo la dirección de (centros-comerciales) con el boton
    path: 'centro-comercial',
    component: CentroComercialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
