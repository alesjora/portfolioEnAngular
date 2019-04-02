import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './proyectos.component';
import { CardProyectModule } from 'src/app/components/card-proyect/card-proyect.module';

@NgModule({
  declarations: [ProyectosComponent],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    CardProyectModule
  ]
})
export class ProyectosModule { }
