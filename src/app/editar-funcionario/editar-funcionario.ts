import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-editar-funcionario',
  imports: [FormsModule],
  templateUrl: './editar-funcionario.html',
  styleUrl: './editar-funcionario.css',
})
export class EditarFuncionario {
  id_funcionario:string=''
funcionario={
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
constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute){}
ngOnInit(){
this.id_funcionario=this.route.snapshot.params['id_funcionario']

}

actualizarFuncionario(){
  this.http.patch("https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/funcionario?id_funcionario=eq."+this.id_funcionario,
    this.funcionario,
    {
      headers:{

      Authorization:"Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",

      apikey:"sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",

      'Content-Type':"application/json"
    }
    }

  ).subscribe({

    next:(res)=> {
      alert('Registro Actualizado Correctamente'+res)
      this.router.navigate(['/editarFuncionario',])
    }
  })
}

}
