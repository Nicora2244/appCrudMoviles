import { Routes } from '@angular/router';

export const routes: Routes = [
  // { path: 'login', ... }  // login route commented out
  {
    path: '',
    redirectTo: '/tabs/multimedia',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.routes').then(m => m.routes),
  },
  /*{
    path: 'multimedia',
    loadComponent: () =>
      import('./pages/CRUDMultimedia/multimedia.page').then(m => m.MultimediaPage),
  },*/
  {
    path: 'heroes',
    loadComponent: () => import('./pages/heroes/heroes.page').then(m => m.HeroesPage)
  },
  {
    path: 'heroe/:id/:accion',
    loadComponent: () => import('./pages/heroe/heroe.page').then(m => m.HeroePage)
  },
];

