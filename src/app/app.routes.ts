import { Routes } from '@angular/router';
import { Usuarios } from './usuarios/usuarios';
import { CrearUsuario } from './crear-usuario/crear-usuario';
import { EditarUsuario } from './editar-usuario/editar-usuario';


export const routes: Routes = [
{path:'', component:Usuarios},

{path:'usuarios', component:Usuarios},
{path:'crearUsuario', component:CrearUsuario},
{path:'editarUsuario', component:EditarUsuario}






];

