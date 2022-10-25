import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentroComercialPage } from './centro-comercial.page';

const routes: Routes = [
  {
    path: '',
    component: CentroComercialPage
  },
  {
    path: 'departamentos',
    loadChildren: () => import('./departamentos/departamentos.module').then( m => m.DepartamentosPageModule)
  },
  {
    path: 'opciones-componente',
    loadChildren: () => import('./opciones-componente/opciones-componente.module').then( m => m.OpcionesComponentePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentroComercialPageRoutingModule {}
