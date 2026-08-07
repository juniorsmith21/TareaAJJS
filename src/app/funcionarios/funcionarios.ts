import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Funcionario{
  id_funcionario: number;
  ci: string;
  apellidos: string;
  nombres: string;
  tipo_funcionario: string;
  telefono: string;
  correo: string;
  direccion: string;
  sexo: string;

}

@Component({
  selector: 'app-funcionarios',
  imports: [FormsModule,CommonModule],
  templateUrl: './funcionarios.html',
  styleUrl: './funcionarios.css',
})
export class Funcionarios {
funcionario:Funcionario[]=[]

constructor(private http:HttpClient, private cdr:ChangeDetectorRef, private router:Router){}
ngOnInit(){
  this.traerFuncionario()
}
traerFuncionario(){
  this.http.get<Funcionario[]>("https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/funcionario",
    {
      headers:{

      Authorization:"Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",

      apikey:"sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",

      'Content-Type':"application/json"
    }
      
    }

  ).subscribe({
    next:(res)=>{
      console.log(res);
      if(res.length>0){
        this.funcionario=res
      }
      this.cdr.detectChanges();
      
    }

  })
}
eliminar(id_funcionario:number){
  this.http.delete("https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/funcionario?id_funcionario=eq."+id_funcionario,
    {
       headers:{

      Authorization:"Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",

      apikey:"sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",

      'Content-Type':"application/json"
    }

    }
  ).subscribe({
    next:(res)=>{
        alert('Registro eliminado correctamente'+ id_funcionario)
        this.traerFuncionario()
        this.cdr.detectChanges()
    }
  })
}
llevarActualizar(id_funcionario:number){
this.router.navigate(['/editarFuncionario', id_funcionario])
}

}
