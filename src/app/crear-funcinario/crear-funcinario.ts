import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-funcinario',
  imports: [CommonModule,FormsModule],
  templateUrl: './crear-funcinario.html',
  styleUrl: './crear-funcinario.css',
})
export class CrearFuncinario {
  nuevoFuncionario={
  "id_funcionario":'',
  "ci":'',
  "apellidos":'',
  "nombres":'',
  "tipo_funcionario":'',
  "telefono":'',
  "correo":'',
  "direccion":'',
  "sexo":''
}

constructor(private http:HttpClient){}


guardarFuncionario(){
this.http.post("https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/funcionario",
  this.nuevoFuncionario,
  {
    headers:{
      Authorization:"Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
      apikey:"sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
      'Content-Type':"application/json"
    }
  }
).subscribe({
  next:(res)=>{
    alert('Funcionario guardado correctamente'+res)
  }

})

}
}
