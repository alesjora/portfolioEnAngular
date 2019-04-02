import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabilidadesRoutingModule } from './habilidades-routing.module';
import { HabilidadesComponent } from './habilidades.component';
import { ProgressBarModule } from 'src/app/components/progress-bar/progress-bar.module';

@NgModule({
  declarations: [HabilidadesComponent],
  imports: [
    CommonModule,
    HabilidadesRoutingModule,
    ProgressBarModule
  ]
})
export class HabilidadesModule { }
