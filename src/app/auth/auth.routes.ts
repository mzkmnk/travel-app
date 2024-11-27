import {Routes} from "@angular/router";

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent:() => import('./login/login.component').then((M) => M.LoginComponent),
  },
  {
    path:'**',
    redirectTo:'login',
  }
]
