import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreMiComponent } from './sobre-mi.component';
import { SobreMiRoutingModule } from './sobre-mi-routing.module';
import { CardModule } from 'src/app/components/card/card.module';

@NgModule({
  declarations: [SobreMiComponent],
  imports: [
    CommonModule,
    SobreMiRoutingModule,
    CardModule
  ],
  exports: []
})
export class SobreMiModule { }
