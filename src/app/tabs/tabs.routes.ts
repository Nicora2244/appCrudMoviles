import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'multimedia',
        loadComponent: () =>
          import('../pages/CRUDMultimedia/multimedia.page').then(m => m.MultimediaPage),
      },
      {
        path: 'multimediaheroe',
        loadComponent: () =>
          import('../pages/CRUDMultimedia-Heroe/multimediasheroe.page').then(m => m.MultimediaHeroePage),
      },
      {
        path: 'grupomultimedia',
        loadComponent: () =>
          import('../pages/CRUDGrupoMultimedia/grupo-multimedia.page').then(m => m.GrupoMultimediaPage),
      },
      {
        path: 'tab4',
        loadComponent: () =>
          import('../pages/heroes/heroes.page').then((m) => m.HeroesPage),
      },
      {
        path: '',
        redirectTo: 'multimedia',
        pathMatch: 'full',
      },
    ],
  },
];
