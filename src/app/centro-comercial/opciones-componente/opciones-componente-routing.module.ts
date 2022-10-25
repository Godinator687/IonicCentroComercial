import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesComponentePage } from './opciones-componente.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesComponentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesComponentePageRoutingModule {}
