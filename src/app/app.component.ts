import {Component, inject} from '@angular/core';
import {IonApp, IonRouterOutlet} from '@ionic/angular/standalone';
import {App, URLOpenListenerEvent} from "@capacitor/app";
import {Router} from "@angular/router";
import {SupabaseService} from "@/src/shared/services/supabase.service";
import {ToastService} from "@/src/shared/services/toast.service";
import {UserAPI} from "@/src/shared/api/user.api";

@Component({
    selector: 'app-root',
    imports: [IonApp, IonRouterOutlet],
    template:`
      <ion-app>
        <ion-router-outlet></ion-router-outlet>
      </ion-app>
    `
})
export class AppComponent {

  private readonly supabaseService = inject(SupabaseService);

  private readonly router = inject(Router);

  private readonly toastService = inject(ToastService);

  constructor() {

    this.supabaseService.supabase.auth.onAuthStateChange((event, session): void => {
      console.log(event);
      if (session?.user) {
        console.log(session?.user);
        this.router.navigate(['/internal'], {replaceUrl: true}).then();
      }
    });

    this.setupListener().then()
  }

  /** capacitorでのredirectでセッション情報があるなら保存してinternalに移動する */
  setupListener = async (): Promise<void> => {
    await App.addListener('appUrlOpen',async (data:URLOpenListenerEvent) => {

      const toast = await this.toastService.presentToast({toastOptions:{message:'Loading...',color:'medium'}});

      const url:string = data.url;
      const accessToken:string|undefined = url.split('#access_token=').pop()?.split('&')[0];
      const refreshToken:string|undefined = url.split('#refresh_token=').pop()?.split('&')[0];

      await toast.dismiss();

      if(accessToken === undefined || refreshToken === undefined){
        await this.toastService.presentToast({toastOptions:{message:'Can not Authentication',color:'warning'}})
        return
      }

      await this.supabaseService.supabase.auth.setSession({access_token:accessToken,refresh_token:refreshToken});

      // this.userAPI.create({id: '', username: '', email: ''})

      await this.toastService.presentToast({toastOptions:{message:'Success Authentication',duration:3000,color:'success'}})

    })
  }
}
