import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';

import { Tab4Page } from './tab4.page';
import { ViajesPipe } from '../viajes.pipe';
import { ViajesPipePipe } from '../viajes-pipe.pipe';
import { TabsPage } from '../tabs/tabs.page';
import { TabsPageModule } from '../tabs/tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule,

  ],
  exports: [
    ViajesPipePipe,
    ViajesPipe  
  ],
 
  declarations: [Tab4Page,ViajesPipePipe,ViajesPipe],
})
export class Tab4PageModule {}
