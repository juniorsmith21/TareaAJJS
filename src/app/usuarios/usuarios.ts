import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  nuevoUsuario={
  id_usuario:'',
  contrasena:'',
  tipo_usuario:'',
  estado:'',
  registrar:false,
  editar:false,
  eliminar:false,
  id_funcionario:''
}

// arreglo del GET,  se guardaran las respuestas del GET

funcionarios: any[] = [];

//Hacer get de funcionarios
obtenerFuncionarios(){
  this.http.get<any[]>("https://TU_PROYECTO.supabase.co/rest/v1/funcionario?select=*", 
    {
      Headers:
    }
  )
}

}

