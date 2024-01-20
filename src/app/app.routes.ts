import { Routes } from '@angular/router';
import { LibrosComponent } from './components/libros/libros.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

export const routes: Routes = [
    {
        path: 'libros',
        component: LibrosComponent
    },
    {
        path: 'usuarios',
        component: UsuariosComponent
    }

];
