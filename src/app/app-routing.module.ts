import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'resgitro',
    loadChildren: () => import('./paginas/resgitro-participante/resgitro-participante.module').then( m => m.ResgitroParticipantePageModule)
  },
  {
    path: 'succes',
    loadChildren: () => import('./paginas/registro-succes/registro-succes.module').then( m => m.RegistroSuccesPageModule)
  },
  {
    path: 'all-registros',
    loadChildren: () => import('./paginas/all-registros/all-registros.module').then( m => m.AllRegistrosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
