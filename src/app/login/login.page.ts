import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario:any={};
  isAlertOpen = false;

  alertButtons = ['OK'];
    constructor(private servicio:ServicioService,private router:Router) { }

  ngOnInit() {
  }

  
ingresar(usuario:{}){
 
  this.servicio.getLogin(usuario).subscribe((data:any)=>{
    if(data!=null && data!=undefined && data!=""){
      localStorage.setItem("usuario",JSON.stringify(data))


      this.router.navigate(["/tabs/tab3"])

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
    this.router.navigate(["/registro"])
}

}
