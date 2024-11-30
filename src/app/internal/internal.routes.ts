import {Routes} from "@angular/router";

export const INTERNAL_ROUTES: Routes = [
  {
    path:'dashboard',
    loadComponent:() => import('./dashboard/dashboard.component').then((M) => M.DashboardComponent),
  },
  {
    path:'**',
    redirectTo:'dashboard',
  }
]
