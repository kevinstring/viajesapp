import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
viajes:any=[];
reservacionesPorUsuario:any=[];
reservacionlista={
  correo:"",
  idViaje:0,
  cantidadPasajeros:0,
  observaciones:""
  ,
idEstado:0,
}

viaje:any={};
reservacion=false;
lugares:any=[];
usuarioSesion:any=JSON.parse(localStorage.getItem("usuario"));
  constructor(private servicio:ServicioService) { }

  ngOnInit() {
      this.getViajes()
      this.getOrigenes()
      this.getReservaciones();
  
  }
  
reservacionOn(viajes)
{
  this.viaje=viajes;
this.reservacion=true;
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
  getReservaciones(){
    this.servicio.getReservacionPorCorreoEIdEstado(this.usuarioSesion.correo,9).subscribe((data:any)=>{
this.reservacionesPorUsuario=data; 
console.log(data)   }
    )
    
  }


  reservar(viaje){
        viaje.cupo=viaje.cupo-1;
        viaje.idEstado=11;
    // for(let r of this.reservacionesPorUsuario){
    //     console.log(JSON.stringify(r))
    //   if(r.idViaje==viaje.idViaje){
    //    console.log("ya reservo")
    //       return;
    //   }
  
    //   }  
    console.log(viaje)
    this.reservacionlista.cantidadPasajeros+=1;

        this.reservacionlista.correo=this.usuarioSesion.correo;
        this.reservacionlista.idViaje=viaje.idViaje;
        this.reservacionlista.observaciones=viaje.observaciones;
        this.reservacionlista.idEstado=viaje.idEstado;
        this.servicio.postReservacion(this.reservacionlista).subscribe((data:any)=>{
          console.log(data)
          this.servicio.postViaje(viaje).subscribe((data:any)=>{
            this.getViajes()
          }
          )


          this.reservacion=false;
          this.getViajes();
        })
      
    
      
    
}
}
