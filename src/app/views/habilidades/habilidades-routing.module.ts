import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabilidadesComponent } from './habilidades.component';

const routes: Routes = [
  {
    path: '',
    component: HabilidadesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabilidadesRoutingModule { }
