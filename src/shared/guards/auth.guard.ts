import {CanActivateFn} from "@angular/router";
import {inject} from "@angular/core";
import {SupabaseService} from "@/src/shared/services/supabase.service";
import { map, take} from "rxjs";
import {ToastService} from "@/src/shared/services/toast.service";

export const AuthGuard:CanActivateFn = () => {
  const supabaseService = inject(SupabaseService);
  const toastService = inject(ToastService);

  return supabaseService.getCurrentUser().pipe(
    take(1),
    map((isAuthenticated) => {
      if(isAuthenticated){
        return true
      }else{
        toastService.presentToast({toastOptions:{message:'再ログインをお願いします',color:'warning',position:'top',duration:3000}}).then();
        return false
      }
    }),
  )
};
