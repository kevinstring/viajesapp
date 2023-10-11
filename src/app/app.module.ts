import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPipe } from './login.pipe';
import { FormsModule } from '@angular/forms';
import { ViajesPipePipe } from './viajes-pipe.pipe';
import { ViajesPipe } from './viajes.pipe';
import { MiReservacionPipe } from './mi-reservacion.pipe';

@NgModule({
  declarations: [AppComponent, LoginPipe],  

  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
