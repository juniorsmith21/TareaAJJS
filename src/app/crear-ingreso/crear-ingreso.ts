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
  bitacoras:any[]=[];

  nuevoIngreso={
    id_ingreso:'',
    id_usuario:'',
    id_bitacora:''
  }

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.obtenerUsuarios();
    this.obtenerBitacoras();
  }

  obtenerUsuarios(){

    this.http.get<any[]>(
      "https://TU_PROYECTO.supabase.co/rest/v1/usuario?select=*",
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

  obtenerBitacoras(){

    this.http.get<any[]>(
      "https://TU_PROYECTO.supabase.co/rest/v1/bitacora?select=*",
      {
        headers:{
          Authorization:"Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
          apikey:"sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x"
        }
      }
    ).subscribe({
      next:(respuesta)=>{
        this.bitacoras=respuesta;
      }
    });

  }

  guardarIngreso(){

    this.http.post(
      "https://TU_PROYECTO.supabase.co/rest/v1/ingresa",
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
