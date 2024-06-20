import { Component, OnInit } from '@angular/core';
import { LocalStorageServiceService} from '../local-storage-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-seleccion-ejercicios',
  standalone: true,
  imports: [],
  templateUrl: './seleccion-ejercicios.component.html',
  styleUrl: './seleccion-ejercicios.component.css'
})
export class SeleccionEjerciciosComponent implements OnInit {
  ejercicios: any[] =[];

  nombreUsuario: string | null = null;
  constructor(private localStorageService: LocalStorageServiceService, private router: Router, private http: HttpClient) { }
  ngOnInit(): void {
    this.ejercicios = this.localStorageService.getNombres();
    // Obtener informacion del usuario por ser la ultima parte de la url
    const user = this.router.url.split('/').pop();
    console.log("usuario es: ", user);
    const payload = { usuario: user };
    this.http.post('http://localhost:5000/usuario', payload).subscribe({
      next: (res) => {
        console.log('Respuesta del servidor:', res);
      },
      error: (err) => {
        console.error('Error al obtener la informacion del usuario:', err);
      }
    });

  }

  onSelectExercise(ejercicio: any): void {
    this.router.navigate(['/informacion', ejercicio.nombre]);
  }

  goToProgress(): void {
    this.router.navigate(['/progreso']);
  }
}
