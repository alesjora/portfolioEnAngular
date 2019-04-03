import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './views/principal/principal.component';
import { ContactoModule } from './views/contacto/contacto.module';

const routes: Routes = [
  {
    path: 'sobre_mi',
    loadChildren: './views/sobre-mi/sobre-mi.module#SobreMiModule'
  },
  {
    path: 'habilidades',
    loadChildren: './views/habilidades/habilidades.module#HabilidadesModule'
  },
  {
    path: 'proyectos',
    loadChildren: './views/proyectos/proyectos.module#ProyectosModule'
  },
  {
    path: 'contacto',
    loadChildren: './views/contacto/contacto.module#ContactoModule'
  },
  {
    path: '',
    component: PrincipalComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
