import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const url="http://localhost:8080/";
const httpOptions = {
  headers:new HttpHeaders({
    "Content-Type":"application/json",
    'Access-Control-Allow-Origin': 'http://localhost:8100'
  })
  }

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  getLogin(usuario:any){
    return this.http.post(url+"usuario/login",usuario,httpOptions);
  }
  
  getUsuarios()
{
  return this.http.get('http://localhost:8080/usuario/buscar')
}
  getEver(busqueda:string){
   return this.http.get(`${url}${busqueda}/login`);
  }

  postEver(tabla:string,formulario:string){
    return this.http.post(url+"guardar/"+tabla,{formulario});

}
postUsuario(usuario: any) {
  return this.http.post(url + 'usuario/guardar', usuario);
}

putUsuario(usuario: any) {
  return this.http.put(url + 'usuario/actualizar', usuario);

}

getAnuncios() {
  return this.http.get(url + 'anuncio/buscar');
}

getViajes() {
  return this.http.get(url + 'viaje/buscar');
}
getLugares() {
  return this.http.get(url + 'lugar/buscar');
}

postReservacion(reservacion: any) {
  return this.http.post(url + 'reservacion/guardar', reservacion);
  }

  getReservacionPorCorreoEIdEstado(correo: string, idEstado: number) {
    return this.http.get(url + `reservacion/buscar/correo/${correo}/idEstado/${idEstado}`);
  }

postViaje(viaje: any) {
  return this.http.post(url + 'viaje/guardar', viaje);
    }


    enviarComentario(comentario: any) {
      return this.http.post(url + 'comentario/guardar', comentario);
    }
    getComentarios() {
      return this.http.get(url + 'comentario/buscar');
    }
}
