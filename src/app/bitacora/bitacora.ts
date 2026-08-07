import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

interface BitacoraModel {
  id_bitacora: number;
  operacion: string;
  tabla: string;
  fecha: string;
  sintaxis_sql: string;
  nombre_sql: string;
  id_usuario: string;
}
@Component({
  selector: 'app-bitacora',
  imports: [CommonModule],
  templateUrl: './bitacora.html',
  styleUrl: './bitacora.css'
})
export class Bitacora {

  bitacora: BitacoraModel[] = [];

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.traerBitacora();
  }


  traerBitacora() {

    this.http.get<BitacoraModel[]>(
      'https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/bitacora',
      {
        headers: {
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'
        }
      }
    ).subscribe({

      next: (res) => {
        console.log(res)
        this.bitacora = res;
         this.cdr.detectChanges();

      },

      error: (error) => {

        console.error('Error:', error);

      }

    });

  }

  eliminar(id_bitacora: number) {

    this.http.delete(
      `https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/bitacora?id_bitacora=eq.${id_bitacora}`,
      {
        headers: {
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'
        }
      }
    ).subscribe({

      next: () => {

        alert('Registro eliminado correctamente');

        this.traerBitacora();

      },

      error: (error) => {

        console.error('Error al eliminar:', error);

      }

    });

  }

llevarActualizar(id_bitacora: number) {

  this.router.navigate([
    '/editar-bitacora',
    id_bitacora
  ]);

}}