import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartamentosPage } from './departamentos.page';
import { ElectronciaComponent } from './electroncia/electroncia.component';
import { LineaBlancaComponent } from './linea-blanca/linea-blanca.component';

const routes: Routes = [
  {
    path: '',
    component: DepartamentosPage
  },
  {
    path:'linea-blanca',
    loadChildren:() => import('./linea-blanca/linea-blanca.component').then (m => m.LineaBlancaComponent)
  },
  {
    path:'electronica',
    loadChildren:()=> import('./electroncia/electroncia.component').then(m => m.ElectronciaComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartamentosPageRoutingModule {}
