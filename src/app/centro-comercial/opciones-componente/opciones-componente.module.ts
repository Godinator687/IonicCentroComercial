import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesComponentePageRoutingModule } from './opciones-componente-routing.module';

import { OpcionesComponentePage } from './opciones-componente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesComponentePageRoutingModule
  ],
  declarations: [OpcionesComponentePage]
})
export class OpcionesComponentePageModule {}
