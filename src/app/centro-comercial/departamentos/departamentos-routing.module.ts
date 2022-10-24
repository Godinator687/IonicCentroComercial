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
    component:LineaBlancaComponent
  },
  {
    path:'electronica',
    component:ElectronciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartamentosPageRoutingModule {}
