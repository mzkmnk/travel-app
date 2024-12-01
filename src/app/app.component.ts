import {Component, inject} from '@angular/core';
import {IonApp, IonRouterOutlet} from '@ionic/angular/standalone';
import {App, URLOpenListenerEvent} from "@capacitor/app";
import {SupabaseService} from "@/src/shared/services/supabase.service";
import {ToastService} from "@/src/shared/services/toast.service";
import { register } from 'swiper/element/bundle';

register();

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

  private readonly toastService = inject(ToastService);

  constructor() {
    this.setupListener().then()
  }

  /** capacitorでのredirectでセッション情報があるなら保存してinternalに移動する */
  setupListener = async (): Promise<void> => {
    await App.addListener('appUrlOpen',async (data:URLOpenListenerEvent) => {

      const toast = await this.toastService.presentToast({toastOptions:{message:'Loading...',color:'medium'}});

      const url:string = data.url;
      const accessToken:string|undefined = url.split('#access_token=').pop()?.split('&')[0];
      const refreshToken:string|undefined = url.split('#refresh_token=').pop()?.split('&')[0];

      if(accessToken === undefined || refreshToken === undefined){
        await toast.dismiss();
        await this.toastService.presentToast({toastOptions:{message:'Can not Authentication',color:'warning'}})
        return
      }
      await this.supabaseService.supabase.auth.setSession({access_token:accessToken,refresh_token:refreshToken});
    })
  }
}
