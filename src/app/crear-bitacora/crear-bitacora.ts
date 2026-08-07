import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-bitacora',
  imports: [CommonModule,FormsModule],
  templateUrl: './crear-bitacora.html',
  styleUrl: './crear-bitacora.css',
})
export class CrearBitacora {
 nuevaBitacora={        //Tenemos el objeto con los campos requeridos en los que vamos a trabajar
  operacion:"",
  tabla:"",
  fecha:"",
  sintaxis_sql:"",
  nombre_sql:"",
  id_usuario:"",

 }
//luego creamos el arreglo que va a tomar los datos que hay en los usuarios junto con la funcion con la que vamos a obtener a los usuarios 
 usuarios:any[]=[];
 ngOnInit(){
  this.obtenerUsuarios();
}
//aqui tenemos el constructor que es el metodo que va a permitir mostrar los datos y se declara el httpClient
 constructor(private http:HttpClient,){

 }

 //esta es la funcion en la que vamos a guardar la bitacora,se utiliza un this para obtener los datos con la variable del http definida en el constructor
 //seguida de el metodo que vamos a utilizar que este es el de crear (post ) seguido de la url de la api compartida 
 //luego traemos el objeto y tenemos los headerr con sus distintos valores 
guardarBitacora(){
this.http.post("https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/bitacora",
this.nuevaBitacora,{
headers:{
  Authorization:"Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
  apikey:"sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
  'Content-Type':'application/json'

}
//en el suscribe nos dice que va a esperar una respuesta 
}).subscribe({next:(respuesta)=>
  alert("Bitacora creada correctamente (Querid@))"+respuesta)
})
}
obtenerUsuarios(){

  this.http.get<any[]>(
    "https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/usuario?select=*",
    {
      headers:{
        Authorization:"Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
        apikey:"sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x"
      }
    }
  ).subscribe({
    next:(respuesta)=>{
      this.usuarios=respuesta;
       this.nuevaBitacora={  //limpia los campos del formulario 
    operacion:"",
    tabla:"",
    fecha:"",
    sintaxis_sql:"",
    nombre_sql:"",
    id_usuario:""
  };
    }
  });

}








}
