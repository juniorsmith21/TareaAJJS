import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-ingreso',
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-ingreso.html',
  styleUrl: './editar-ingreso.css'
})
export class EditarIngreso {

  ingresoEditar = {
    id_ingreso: '',
    fecha_ingreso: '',
    fecha_salida: '',
    estado: '',
    id_usuario: ''
  }

  constructor(private http: HttpClient) {}

  actualizarIngreso() {

    this.http.patch(
      "https://mcylhpmszpjvcohpzqgy.supabase.co/rest/v1/ingreso?id_ingreso=eq.1" + this.ingresoEditar.id_ingreso,
      {
        fecha_ingreso: this.ingresoEditar.fecha_ingreso,
        fecha_salida: this.ingresoEditar.fecha_salida,
        estado: this.ingresoEditar.estado,
        id_usuario: this.ingresoEditar.id_usuario
      },
      {
        headers: {
          Authorization: "Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
          apikey: "sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
          "Content-Type": "application/json"
        }
      }
    ).subscribe({
      next: (respuesta) => {
        alert("Ingreso actualizado"+ respuesta);
      },
      error: (error) => {
        alert("Error al actualizar");
        console.log(error);
      }
    });

  }

}