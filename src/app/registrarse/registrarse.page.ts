import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
usuario:any={};
  constructor() { }

  ngOnInit() {
  }
  registrarse(){
    console.log(this.usuario)
  }	
}
