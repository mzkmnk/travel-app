import {Component, inject} from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {App, URLOpenListenerEvent} from "@capacitor/app";
import {Router} from "@angular/router";
import {SupabaseService} from "@/src/shared/services/supabase.service";

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

  private router = inject(Router);

  constructor() {
    this.setupListener()
  }

  /** capacitorでのredirectでセッション情報があるなら保存してinternalに移動する */
  setupListener = (): void => {

    App.addListener('appUrlOpen',async (data:URLOpenListenerEvent) => {

      const url:string = data.url;
      const accessToken:string|undefined = url.split('#access_token=').pop()?.split('&')[0];
      const refreshToken:string|undefined = url.split('#refresh_token=').pop()?.split('&')[0];

      if(accessToken === undefined || refreshToken === undefined){
        return
      }

      await this.supabaseService.supabase.auth.setSession({access_token:accessToken,refresh_token:refreshToken})

      await this.router.navigate(['/internal']);
    }).then()
  }
}
