import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./usuario/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./usuario/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./usuario/recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'inscripcion',
    loadChildren: () => import('./usuario/inscripcion/inscripcion.module').then( m => m.InscripcionPageModule)
  },
  {
    path: 'nueva-receta',
    loadChildren: () => import('./creador/nueva-receta/nueva-receta.module').then( m => m.NuevaRecetaPageModule)
  },
  {
    path: 'reg-recetas',
    loadChildren: () => import('./receta/reg-recetas/reg-recetas.module').then( m => m.RegRecetasPageModule)
  },
  {
    path: 'desayuno',
    loadChildren: () => import('./receta/desayuno/desayuno.module').then( m => m.DesayunoPageModule)
  },
  {
    path: 'ensalada',
    loadChildren: () => import('./receta/ensalada/ensalada.module').then( m => m.EnsaladaPageModule)
  },
  {
    path: 'plato',
    loadChildren: () => import('./receta/plato/plato.module').then( m => m.PlatoPageModule)
  },
  {
    path: 'postre',
    loadChildren: () => import('./receta/postre/postre.module').then( m => m.PostrePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
