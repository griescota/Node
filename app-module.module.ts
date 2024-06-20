import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule, // Agregar FormsModule
    ReactiveFormsModule, // Agregar ReactiveFormsModule
    HttpClientModule 
  ]
})
export class AppModuleModule { }
