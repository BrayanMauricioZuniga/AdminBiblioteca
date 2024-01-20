import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private libros: Libro[] =[];

  constructor() { }

  obtenerLibros(){
     return this.libros;
  }
  
  buscarLibro(id:number){
    return this.libros.find(libro => libro.id === id);
  }

  guardarLibro(libro: Libro){
    this.libros.push(libro);
  }

  actualizarLibro(libro: Libro){
    const index = this.libros.findIndex(b => b.id === libro.id);
    if (index !== -1) {
      this.libros[index] = libro; 
    }
  }

  eliminarLibro(id: number){
    this.libros = this.libros.filter(libro => libro.id !== id);
  }
}
