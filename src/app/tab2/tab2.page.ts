import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
misReservaciones:any=[];
viajes:any=[];
fechaFinalizada=false;
lugares:any=[];
fechaFinalizacion:any;
reservacion=false
ngOnInit(){
  const observables = [
    this.getReservaciones(10),
    this.getReservaciones(11)
  ];

}
usuarioSesion:any=JSON.parse(localStorage.getItem("usuario"));

  constructor(private servicio:ServicioService) {


    this.getViajes()
    this.getOrigenes()
    this.comprobarFechaDeFinalizacion();
  }
  getViajes(){
    this.servicio.getViajes().subscribe((data:any)=>{
      this.viajes=data;
      console.log(data)
 
      
    
     
   
    })
  }

  getOrigenes(){
    this.servicio.getLugares().subscribe((data: any) => {
      this.lugares = data;
    console.log(this.lugares);

    });
  }


  getReservaciones(id){
    this.servicio.getReservacionPorCorreoEIdEstado(this.usuarioSesion.correo,id).subscribe((data:any)=>{
this.misReservaciones=data; 
console.log(data)  

this.misReservaciones.forEach(element => {
  element.fechaFinalizacion
    this.viajes.forEach(element2 => {
      if(element.idViaje==element2.idViaje)
      {
        const fechaRegreso=Date.parse(element2.fechaRegreso);
        const fechaFinalizacion=Date.parse(this.comprobarFechaDeFinalizacion());
        console.log(fechaRegreso,fechaFinalizacion)
        if(fechaRegreso>fechaFinalizacion)
        {this.reservacion=true;}  
      }
    }
    );
 }  );   
}   )
  } 
    
  

  comprobarFechaDeFinalizacion()
{
  var fechaActual = new Date();
var dia = fechaActual.getDate();
var mes = fechaActual.getMonth() + 1; // Los meses son 0-based
var año = fechaActual.getFullYear();

var fechaFormateada = año + '-' + mes + '-' + dia;
return fechaFormateada



}
}
