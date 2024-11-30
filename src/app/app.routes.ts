import { Routes } from '@angular/router';
import {AuthGuard} from "@/src/shared/guards/auth.guard";

export const routes: Routes = [
  {
    path:'auth',
    loadChildren:() => import('./auth/auth.routes').then((M) => M.AUTH_ROUTES),
  },
  {
    path:'internal',
    loadChildren:() => import('./internal/internal.routes').then((M) => M.INTERNAL_ROUTES),
    canActivate:[AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
