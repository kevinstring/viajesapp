import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Observable, forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
misReservaciones:any=[];
viajes:any=[];
fechaFinalizada=false;
reservacion:any={}
misReservas: any[] = []; // Inicializa misReservaciones como un arreglo vacío
comentario=""
lugares:any=[];
fechaFinalizacion:any;
reservacionTerminada=false
viajesFiltrados: any[] = [];

ngOnInit(){
  this.getReservaciones(10);
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
 
      this.viajesFiltrados = this.viajes.filter(viaje => viaje.idViaje === this.reservacion.idViaje);
console.log(this.viajesFiltrados)
    
     
   
    })
  }

  getOrigenes(){
    this.servicio.getLugares().subscribe((data: any) => {
      this.lugares = data;
    console.log(this.lugares);

    });
  }


  getReservaciones(id){
     this.servicio.getReservacionPorCorreoEIdEstado(this.usuarioSesion.correo, id).subscribe((data:any)=>{
        this.misReservaciones=data;
    
  
    
  
        this.misReservaciones.forEach(element => {
          element.fechaFinalizacion
          this.viajes.forEach(element2 => {
            if (element.idViaje == element2.idViaje) {
              const fechaRegreso = Date.parse(element2.fechaRegreso);
              const fechaHoy = Date.parse(this.comprobarFechaDeFinalizacion());
  
              this.reservacionTerminada = true;
            }
          });
        });
  
      })
    
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

reservacionesPasadas() {
  this.fechaFinalizada = !this.fechaFinalizada; // Cambia el valor de fechaFinalizada

  if (this.fechaFinalizada) {
    // Realiza acciones cuando fechaFinalizada es true
    this.getReservaciones(11);
  } else {
    this.getReservaciones(10);
    // Realiza acciones cuando fechaFinalizada es false
    // Puedes agregar cualquier otra lógica que desees aquí
  }
}

enviarComentario(comentario,reservacion){
  var fechaActual = new Date();
  var dia = fechaActual.getDate();
  var mes = fechaActual.getMonth() + 1; // Los meses son 0-based
  var ano = fechaActual.getFullYear();
  
  var fechaFormateada = dia + '-' + mes + '-' + ano;
  const partesFecha = fechaFormateada.split('-'); // Dividir la fecha en partes
  const fechaReformateada = partesFecha[2] + '-' + partesFecha[1] + '-' + partesFecha[0]; // Reformatear a AAAA-MM-DD
let formulario={
  texto:comentario,
  correo:this.usuarioSesion.correo,
  fecha:fechaReformateada,
  idViaje:reservacion.idViaje
  }
  this.servicio.enviarComentario(formulario).subscribe((data:any)=>{
  

    console.log(data)
    this.getReservaciones(10);
  })
}

}
