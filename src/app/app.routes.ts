import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'heroes',
    loadComponent: () => import('./pages/heroes/heroes.page').then( m => m.HeroesPage)
  },
  {
    path: 'heroe/:id/:accion',
    loadComponent: () => import('./pages/heroe/heroe.page').then( m => m.HeroePage)
  },
];
