import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios: Usuario[] = [];

  constructor() { }

  obtenerUsuarios(){
    return this.usuarios;
 }

 guardarUsuario(usuario: Usuario){
  this.usuarios.push(usuario);
}

actualizarUsuario(usuario: Usuario){
  const index = this.usuarios.findIndex(b => b.id === usuario.id);
  if (index !== -1) {
    this.usuarios[index] = usuario; 
  }
}
 
 eliminarUsuario(id: number){
  this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
  }
}
