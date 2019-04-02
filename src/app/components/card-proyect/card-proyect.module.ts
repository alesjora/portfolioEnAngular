import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProyectComponent } from './card-proyect.component';
import { IgxCardModule, IgxIconModule } from 'igniteui-angular';

@NgModule({
  declarations: [CardProyectComponent],
  imports: [
    CommonModule,
    IgxCardModule,
  ],
  exports: [CardProyectComponent]
})
export class CardProyectModule { }
