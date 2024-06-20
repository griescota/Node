import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageServiceService} from '../local-storage-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-info-ejercicios',
  standalone: true,
  imports: [],
  templateUrl: './info-ejercicios.component.html',
  styleUrl: './info-ejercicios.component.css'
})
export class InfoEjerciciosComponent implements OnInit {

  ejercicioNombre: string = "";
  informacionEjercicio: string = "";
  imagenUrl: string ="";
  contador: number = 0;

  constructor( 
    private router: Router ,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageServiceService
  ) { }

  ngOnInit(): void {
    const nombre =this.route.snapshot.paramMap.get('nombre');

    if (nombre) {
    
      this.ejercicioNombre = nombre;
     
      this.informacionEjercicio = this.localStorageService.getInformacion(this.ejercicioNombre);
      this.imagenUrl = this.localStorageService.getImagen(this.ejercicioNombre);
    } else {
    
    }
    this.contador = this.localStorageService.getIterador();
  }
  

  volver(): void {
    
    this.router.navigate(['seleccion/:nombre']);
  }
  
    incrementarContador(): void {
      
      this.contador++;
      
      this.localStorageService.setIterador(this.contador);
    }
}
