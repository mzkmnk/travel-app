import {Routes} from "@angular/router";

export const INTERNAL_ROUTES: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'add',
    loadComponent: () => import('./add/add.component').then((m) => m.AddComponent),
  },
  {
    path: 'user',
    loadComponent: () => import('./user/user.component').then((m) => m.UserComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
