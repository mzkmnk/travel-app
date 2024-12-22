import {Routes} from '@angular/router';
import {InternalComponent} from "./internal/internal/internal.component";

export const routes: Routes = [
  {
    path: 'internal',
    loadChildren: () => import('./internal/internal.routes').then((M) => M.INTERNAL_ROUTES),
    component: InternalComponent,
  },
  {
    path: '**',
    redirectTo: 'internal',
  },
];
