import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
usuario:any={};
cambioContra=false;
  constructor(private servicio:ServicioService) {
    let t = localStorage.getItem("usuario");
    if(t){
      this.usuario=JSON.parse(t);
      console.log(this.usuario)
    }
  }
  logOut(){
    localStorage.removeItem("usuario");
    location.reload();
  }
  cambiar(){
    this.cambioContra=!this.cambioContra;

  }

  cambiarC(password:any){
      this.servicio.postUsuario(password).subscribe((data:any)=>{
        console.log(data)
        this.cambioContra=false;
      }
      ) 
     
} 

}
