import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {SupabaseService} from "@/src/shared/services/supabase.service";
import { map, take} from "rxjs";
import {ToastService} from "@/src/shared/services/toast.service";
import {UserSignalStore} from "@/src/shared/stores/user.signal-store";

export const AuthGuard:CanActivateFn = () => {
  const supabaseService = inject(SupabaseService);
  const toastService = inject(ToastService);
  const router = inject(Router);
  const userSignalStore = inject(UserSignalStore);


  return supabaseService.getCurrentUser().pipe(
    take(1),
    map((isAuthenticated) => {
      console.log('ok',isAuthenticated);
      if(!isAuthenticated){
        toastService.presentToast({toastOptions:{message:'再ログインをお願いします',color:'warning',position:'top',duration:3000}}).then();
        return router.parseUrl('/auth/login');
      }
      return true
    })
  )
};
