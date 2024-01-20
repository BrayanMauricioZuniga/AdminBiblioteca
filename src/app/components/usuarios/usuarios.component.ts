import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})

export class UsuariosComponent implements OnInit{

  usuarios: Usuario[]= [];

  ngOnInit(): void {
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }

  guardarUsuario(usuario: Usuario) {
    this.usuarioService.guardarUsuario(usuario);
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }

  actualizarUsuario(usuario: Usuario) {
    this.usuarioService.actualizarUsuario(usuario);
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }

  eliminarUsuario(id: number) {
    this.usuarioService.eliminarUsuario(id);
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }

  constructor(private usuarioService: UsuariosService){}

}
