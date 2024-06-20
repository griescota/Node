import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageServiceService} from '../local-storage-service.service';

@Component({
  selector: 'app-progreso',
  standalone: true,
  imports: [],
  templateUrl: './progreso.component.html',
  styleUrl: './progreso.component.css'
})
export class ProgresoComponent {

  iterador: number = 0;

  constructor(private localStorageService: LocalStorageServiceService,private router: Router) { }

  ngOnInit(): void {
    // Obtener el valor del iterador del servicio de almacenamiento local
    this.iterador = this.localStorageService.getIterador();
  }
 
 

  irAtras(): void {
    this.router.navigate(['/seleccion/:nombre']);
  }



}
