import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { IgxCardModule } from 'igniteui-angular';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    IgxCardModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
