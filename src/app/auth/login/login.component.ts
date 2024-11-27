import {Component} from "@angular/core";
import {IonButton} from "@ionic/angular/standalone";
import {NgOptimizedImage} from "@angular/common";
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import {environment} from "../../../environments/environment";

@Component({
  selector: "app-login",
  imports: [
    IonButton,
    NgOptimizedImage
  ],
  template: `
    <div class="flex items-center justify-center h-screen container">
      <ion-button>
        <div class="flex items-center justify-center gap-2">
          <img ngSrc="assets/icon/GoogleIcon.svg" width="20" height="20" alt="google icon">
          <p>Login with Google</p>
        </div>
      </ion-button>
    </div>
  `
})
export class LoginComponent {

  private readonly supabase:SupabaseClient;

  constructor() {
    this.supabase =  createClient(environment.supabaseUrl,environment.supabaseKey);
  }
}
