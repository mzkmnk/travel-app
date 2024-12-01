import {signalStore, withMethods} from "@ngrx/signals";
import {inject} from "@angular/core";
import {Router} from "@angular/router";

export type TPath = 'internal/dashboard'|'internal/upload';

export const RouterSignalStore = signalStore(
  {providedIn:'root'},
  withMethods((_,[router] = [inject(Router)]) => {

    const navigate = async ({path}:{path:TPath}):Promise<void> => {
      await router.navigate([path])
    };

    return {
      navigate,
    }
  }),
)
