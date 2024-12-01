import {inject, Injectable} from "@angular/core";
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {AuthSignalStore} from "@/src/shared/stores/auth.signal-store";
import {firstValueFrom} from "rxjs";
import {UserAPI} from "@/src/shared/api/user.api";
import {ToastService} from "@/src/shared/services/toast.service";

@Injectable({providedIn:'root'})
export class SupabaseService {

  supabase:SupabaseClient;

  private readonly router = inject(Router);

  private readonly authSignalStore = inject(AuthSignalStore);

  private readonly userAPI = inject(UserAPI);

  private readonly toastService = inject(ToastService);

  constructor() {
    this.supabase =  createClient(environment.supabaseUrl,environment.supabaseKey);

    this.supabase.auth.onAuthStateChange( async (event, session) => {

      console.log('supabase service',event);

      // ログアウト時
      if(event === 'SIGNED_OUT'){
        await this.router.navigate(['/auth'],{replaceUrl:true});
        return
      }

      const user = session?.user;


      // ユーザが存在する時
      if((event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') && user !== undefined && user.email !== undefined){

        const {exist} = await firstValueFrom(this.userAPI.existUserById({id:user.id}));

        console.log('exist',exist);

        // DBにユーザが存在しないならユーザを作成する
        if(!exist){
          await firstValueFrom(this.userAPI.create({id: user.id, username: user.email.split('@')[0], email: user.email}));
        }

        await this.toastService.presentToast({toastOptions:{message:'Success Authentication',duration:3000,color:'success'}})

        this.authSignalStore.setUser({
          user:{
            ...user,
            username:'', // todo get user name
          }
        })

        await this.router.navigate(['/internal'],{replaceUrl:true});
      }
    });
  }
}
