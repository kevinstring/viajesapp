import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { MiReservacionPipe } from '../mi-reservacion.pipe';
import { ViajesPipe } from '../viajes.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  exports: [
    MiReservacionPipe,
    ViajesPipe
  ],

  declarations: [Tab2Page,MiReservacionPipe,ViajesPipe]
})
export class Tab2PageModule {}
