import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viajesPipe',

})

export class ViajesPipePipe implements PipeTransform {


  transform(value: number, viajes:any[]): unknown {
   
    let e : any;
    for(e of viajes){
      if(e.idLugar==value){
        return e.nombre;
      }
    }
 
    return null;
  }

}
