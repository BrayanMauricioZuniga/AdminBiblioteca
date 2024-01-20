import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';
import { LibroService } from '../../services/libro.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.scss'
})
export class LibrosComponent implements OnInit {

  libros: Libro[] = [];


  constructor(private libroService : LibroService){}

  ngOnInit(): void {
    this.libros = this.libroService.obtenerLibros();  
  }

  guardarLibro(libro: Libro) {
    this.libroService.guardarLibro(libro);
    //this.libros = this.libroService.obtenerLibros();
    console.log(this.libros)
  }

  actualizarLibro(libro: Libro) {
    this.libroService.actualizarLibro(libro);
    this.libros = this.libroService.obtenerLibros();
  }

  eliminarLibro(id: number) {
    this.libroService.eliminarLibro(id);
    this.libros = this.libroService.obtenerLibros();
  }

}
