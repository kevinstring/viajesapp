import { Component } from '@angular/core';
import { ServicioService } from './servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  usuario:any={};
  isAlertOpen = false;
  registrar=false;
  confirmarPassword:string="";
  alertButtons = ['OK'];

   t = localStorage.getItem("usuario");
  sesionIniciada=false;
  constructor(private servicio:ServicioService,private router:Router) {
    if(this.t){
      this.sesionIniciada=true;
    }else{
      this.sesionIniciada=false;
    }

  }
  
  
ingresar(usuario:{}){
 
  this.servicio.getLogin(usuario).subscribe((data:any)=>{
    if(data!=null && data!=undefined && data!=""){
      localStorage.setItem("usuario",JSON.stringify(data))

      this.sesionIniciada=true;
      this.router.navigate(["/tabs"])

  }
  else{
    this.isAlertOpen = true;

  }
  }
  )


}

setOpen(isOpen: boolean) {
  this.isAlertOpen = isOpen;
}
registrarse(){
    this.registrar=true;
}
crearCuenta(usuario:any){
  this.usuario.apellido=''
  this.usuario.foto=''
  this.usuario.telefono=0
  this.usuario.fechaCreacion=new Date()
  if(this.confirmarPassword!=usuario.password){
    alert("Las contraseñas no coinciden")
    return;
  }
  this.servicio.postUsuario(usuario).subscribe((data:any)=>{
    if(data!=null && data!=undefined && data!=""){
      localStorage.setItem("usuario",JSON.stringify(data))

      this.sesionIniciada=true;
      this.router.navigate(["/tabs"])

  }
  else{
    this.isAlertOpen = true;

  }
  }
  )

}
cancelar(){
  this.registrar=false;
  }
}
