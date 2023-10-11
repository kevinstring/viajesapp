import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
anuncios:any=[];
  constructor(private servicio:ServicioService) {
    this.getAnuncios()
  }

  getAnuncios(){
    this.servicio.getAnuncios().subscribe((data:any)=>{
      this.anuncios=data;
      console.log(this.anuncios)
    })
  }

}
