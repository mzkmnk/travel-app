import {CanActivateFn, Router, UrlTree} from "@angular/router";
import {inject} from "@angular/core";
import {ToastService} from "@/src/shared/services/toast.service";
import {AuthSignalStore} from "@/src/shared/stores/auth.signal-store";
import {toObservable} from "@angular/core/rxjs-interop";
import {filter, map} from "rxjs";

/** 認証ガード */
export const AuthGuard:CanActivateFn = () => {
  const toastService = inject(ToastService);
  const router = inject(Router);

  const authSignalStore = inject(AuthSignalStore);

  return toObservable(authSignalStore.user).pipe(
    filter(isAuth => isAuth !== undefined),
    map((isAuth):true|UrlTree => {
      if(!isAuth){
        toastService.presentToast({toastOptions:{message:'再ログインをお願いします',color:'warning',position:'top',duration:3000}}).then();
        return router.createUrlTree(['/auth'])
      }
      return true;
    })
  )
};
