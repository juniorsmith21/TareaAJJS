import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-ingreso',
  imports: [FormsModule,CommonModule],
  templateUrl: './crear-ingreso.html',
  styleUrl: './crear-ingreso.css',
})
export class CrearIngreso {
  usuarios:any[]=[];
  

  nuevoIngreso={
  fecha_ingreso:'',
  fecha_salida:'',
  estado:'',
  id_usuario:''
  }

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.obtenerUsuarios();
  
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
      }
    });

  }

  

  guardarIngreso(){

    this.http.post(
      "https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/ingreso",
      this.nuevoIngreso,
      {
        headers:{
          Authorization:"Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
          apikey:"sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
          "Content-Type":"application/json"
        }
      }
    ).subscribe({
      next:()=>{
        alert("Ingreso guardado");
      }
    });

  }

}
