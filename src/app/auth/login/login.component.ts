import {Component, inject, signal, WritableSignal} from "@angular/core";
import { IonInput } from "@ionic/angular/standalone";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SupabaseService} from "@/src/shared/services/supabase.service";
import {isPlatform} from "@ionic/angular";
import {ToastService} from "@/src/shared/services/toast.service";

@Component({
  selector: "app-login",
  imports: [
    NgOptimizedImage,
    IonInput,
    FormsModule,
  ],
  template: `
    <div class="flex items-center justify-center gap-20 flex-col h-screen container">
      <div>
        <img ngSrc="assets/icon/ServiceIcon.svg" width="90" height="90" alt="service icon">
      </div>
      <div class="flex items-center justify-center flex-col gap-4 w-full">
        <ion-input
          [(ngModel)]="email"
          class="w-4/5"
          mode="md" label="Email"
          label-placement="floating"
          fill="outline"
          placeholder="Enter text"
        >
        </ion-input>

        <div class="bg-blue-600 w-4/5 px-2 py-3 rounded-md" (click)="login()">
          <div class="flex items-center justify-center gap-2">
            <p class="text-white font-semibold">Login</p>
          </div>
        </div>

        <div class="bg-gray-100 w-4/5 px-2 py-3 rounded-md">
          <div class="flex items-center justify-center gap-2">
            <img ngSrc="assets/icon/GoogleIcon.svg" width="20" height="20" alt="google icon">
            <p class="font-semibold text-gray-400">Sign in with Google</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {
  private readonly supabaseService = inject(SupabaseService);

  private readonly toastService = inject(ToastService);

  email:WritableSignal<string> = signal<string>('');

  login = async ():Promise<void> => {

    const redirectTo:string = isPlatform('capacitor') ? 'travel://login':`${window.location.origin}/login`;

    await this.supabaseService.supabase.auth.signInWithOtp({email:this.email(),options:{
      emailRedirectTo: redirectTo
    }});

    await this.toastService.presentToast({toastOptions:{message:"Check your email for the login link!",position:"top",color:"success"}});

    this.email.set('');
  };
}
