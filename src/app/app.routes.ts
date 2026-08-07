import { Routes } from '@angular/router';
import { Usuarios } from './usuarios/usuarios';
import { CrearUsuario } from './crear-usuario/crear-usuario';
import { EditarUsuario } from './editar-usuario/editar-usuario';
import { Funcionarios } from './funcionarios/funcionarios';
import { EditarFuncionario } from './editar-funcionario/editar-funcionario';
import { CrearFuncinario } from './crear-funcinario/crear-funcinario';
import { Ingreso } from './ingreso/ingreso';
import { CrearIngreso } from './crear-ingreso/crear-ingreso';
import { EditarIngreso } from './editar-ingreso/editar-ingreso';
import { Bitacora } from './bitacora/bitacora';
import { EditarBitacora } from './editar-bitacora/editar-bitacora';
import { CrearBitacora } from './crear-bitacora/crear-bitacora';


export const routes: Routes = [
{path:'', component:Usuarios},

{path:'usuarios', component:Usuarios},
{path:'crearUsuario', component:CrearUsuario},
{path:'editarUsuario', component:EditarUsuario},

{path:'funcionario',component:Funcionarios },
{path:'crearFuncionario',component:CrearFuncinario},
{path:'editarFuncionario',component:EditarFuncionario},

{path:'ingreso', component:Ingreso},
{path:'crear-ingreso', component:CrearIngreso},
{path:'editar-ingreso', component:EditarIngreso},


    {path:'bitacora', component:Bitacora},
  { path: 'editar-bitacora/:id_bitacora', component: EditarBitacora },
    {path:'crear-bitacora', component:CrearBitacora},




];

