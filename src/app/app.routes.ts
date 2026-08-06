import { Routes } from '@angular/router';
import { Usuarios } from './usuarios/usuarios';
import { CrearUsuario } from './crear-usuario/crear-usuario';
import { EditarUsuario } from './editar-usuario/editar-usuario';
import { Funcionarios } from './funcionarios/funcionarios';
import { EditarFuncionario } from './editar-funcionario/editar-funcionario';
import { CrearFuncinario } from './crear-funcinario/crear-funcinario';


export const routes: Routes = [
{path:'', component:Usuarios},

{path:'usuarios', component:Usuarios},
{path:'crearUsuario', component:CrearUsuario},
{path:'editarUsuario', component:EditarUsuario},

{path:'funcionario',component:Funcionarios },
{path:'crearFuncionario',component:CrearFuncinario},
{path:'editarFuncionario',component:EditarFuncionario},




];

