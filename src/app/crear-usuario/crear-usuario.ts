import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingreso',
  imports: [CommonModule, FormsModule],
  templateUrl: './ingreso.html',
  styleUrl: './ingreso.css'
})

export class Ingreso {

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