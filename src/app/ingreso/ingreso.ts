import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ingreso.html',
  styleUrl: './ingreso.css'
})
export class Ingreso {

  ingresos:any[]=[];

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.obtenerIngresos();
  }

  obtenerIngresos(){

    this.http.get<any[]>(
      "https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/ingreso?select=*",
      {
        headers:{
          Authorization:"Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
          apikey:"sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x"
        }
      }
    ).subscribe({
      next:(respuesta)=>{
        this.ingresos=respuesta;
      }
    });

  }

}