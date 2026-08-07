import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-bitacora',
  imports: [FormsModule],
  templateUrl: './editar-bitacora.html',
  styleUrl: './editar-bitacora.css'
})
export class EditarBitacora {

  id_bitacora: number = 0;

  bitacora = {
    operacion: '',
    tabla: '',
    fecha: '',
    sintaxis_sql: '',
    nombre_sql: '',
    id_usuario: ''

  };


  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}



  ngOnInit() {

    this.id_bitacora =
      this.route.snapshot.params['id_bitacora'];

    console.log('ID recibido:', this.id_bitacora);

    this.traerBitacora();

  }

  traerBitacora() {

    this.http.get<any[]>( `https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/bitacora?id_bitacora=eq.${this.id_bitacora}`,

      {
        headers: {

          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'
        }
      }

    ).subscribe({

      next: (res) => {

        console.log('Bitácora encontrada:', res);

        if (res.length > 0) { this.bitacora = res[0];
        }

      },

      error: (error) => {console.error('Error al traer bitácora:',error
        );
      }

    });

  }


  actualizarBitacora() {

    this.http.patch(

      `https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/bitacora?id_bitacora=eq.${this.id_bitacora}`,this.bitacora,

      {

        headers: {

          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'
        }

      }

    ).subscribe({next: (res) => {
      console.log('Bitácora actualizada:', res );

  alert('Registro actualizado correctamente' );
  this.router.navigate(['/bitacora']);

      },

      error: (error) => {

        console.error(
          'Error al actualizar:',
          error
        );

        alert(
          'Error al actualizar el registro'
        );

      }

    });

  }

}