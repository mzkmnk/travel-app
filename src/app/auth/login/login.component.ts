import {Component, inject, OnInit, signal, WritableSignal} from "@angular/core";
import {IonButton, IonInput, IonItem, IonList, IonText} from "@ionic/angular/standalone";
import {NgOptimizedImage} from "@angular/common";
import {AuthSession} from "@supabase/supabase-js";
import {FormsModule} from "@angular/forms";
import {SupabaseService} from "../../../shared/services/supabase.service";
import {isPlatform} from "@ionic/angular";

@Component({
  selector: "app-login",
  imports: [
    IonButton,
    NgOptimizedImage,
    IonInput,
    FormsModule,
    IonList,
    IonItem,
    IonText
  ],
  template: `
    <div class="flex items-center justify-center h-screen container flex-col">
      <ion-button (click)="login()">
        <div class="flex items-center justify-center gap-2">
          <img ngSrc="assets/icon/GoogleIcon.svg" width="20" height="20" alt="google icon">
          <p>Login with Google</p>
        </div>
      </ion-button>

      <ion-list>
        <ion-item>
          <ion-input labelPlacement="floating" [(ngModel)]="email">
            <div slot="label">Email <ion-text color="danger">(Required)</ion-text></div>
          </ion-input>
        </ion-item>
      </ion-list>

      <div>
        <p>session</p>
        <p>{{ session()?.user?.email }}</p>
      </div>
    </div>
  `
})
export class LoginComponent implements OnInit {
  private readonly supabaseService = inject(SupabaseService);

  session: WritableSignal<AuthSession|null> = signal(null);

  email = signal<string>('');

  async ngOnInit() {
    const { data } = await this.getSession();
    console.log('dt',data);
    this.session.set(data.session);
  };

  login = () => {
    const redirectTo = isPlatform('capacitor') ? 'travel://login':`${window.location.origin}/login`;
    this.supabaseService.supabase.auth.signInWithOtp({email:this.email(),options:{
      emailRedirectTo: redirectTo
      }}).then((result) => {console.log('result',result);});
  };

  getSession = async () => {
    return await this.supabaseService.supabase.auth.getSession();
  }
}
