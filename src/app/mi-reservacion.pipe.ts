import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miReservacion'
})
export class MiReservacionPipe implements PipeTransform {

  transform(value: number, viaje:any[]): unknown {
    console.log(value,viaje)
let e : any;
for(e of viaje){
  if(e.idViaje==value){
    
    const viaje:any={}
    viaje.idViaje=e.idViaje;
    viaje.nombre=e.nombre;
    viaje.fecha=e.fecha;
    viaje.destino=e.destino;
    viaje.origen=e.origen;
    viaje.observaciones=e.observaciones;
    viaje.idEstado=e.idEstado;
    viaje.idLugar=e.idLugar;
    viaje.idUsuario=e.idUsuario;
    return JSON.stringify(viaje) ;

  }
}
return null;

}
}
