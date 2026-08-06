import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-bitacora',
  imports: [],
  templateUrl: './crear-bitacora.html',
  styleUrl: './crear-bitacora.css',
})
export class CrearBitacora {
 nuevaBitacora={
  operacion:"",
  tabla:"",
  fecha:"",
  sintaxis_sql:"",
  nombre_sql:""

 }
 constructor(private http:HttpClient,){

 }
guardarBitacora(){
this.http.post("https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/bitacora",
this.nuevaBitacora,{
headers:{
  Authorization:"Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
  apikey:"sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
  'content-Type':'application/json'

}

}).subscribe({next:(respuesta)=>
  alert("Bitacora creada correctamente (Querid@))"+respuesta)
})
}









}
