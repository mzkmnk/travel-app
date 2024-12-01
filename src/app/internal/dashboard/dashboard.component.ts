import {Component, inject, signal } from "@angular/core";
import {SupabaseService} from "@/src/shared/services/supabase.service";
import {AuthSession} from "@supabase/supabase-js";
import {IonButton, IonContent} from "@ionic/angular/standalone";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: "app-dashboard",
  imports: [
    IonContent,
    NgOptimizedImage
  ],
  template: `
    <ion-content class="ion-content-bg-primary">
      <div class="flex items-center flex-col gap-3">
        @for(i of Array(10).fill(0); track i){
          <div class="flex flex-col gap-6 bg-white rounded-[30px] w-11/12 h-[35rem] p-4">
            <div class="flex items-center justify-between">
              <div class="flex gap-2 items-center">
                <div class="w-14 h-14 relative mx-auto max-w-md rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-0.5 shadow-lg">
                  <div class="flex items-center justify-center w-full h-full bg-white rounded-full">
                    <img ngSrc="assets/icon/ServiceIcon.png" height="32" width="32" alt="service icon png">
                  </div>
                </div>
                <div class="flex flex-col">
                  <p class="font-semibold">MzkMnk</p>
                  <p class="text-slate-500">404 not found</p>
                </div>
              </div>
              <img ngSrc="assets/icon/DotsHorizontalOutline.svg" height="30" width="30" alt="dots">
            </div>
            <div class="relative w-full h-3/4 flex items-center justify-center">
              <img class="rounded-3xl" ngSrc="assets/mock/mock1.jpg" alt="mock" fill priority>
            </div>
          </div>
        }
      </div>
    </ion-content>
  `,
  styles:`
    ion-content {
      --background: #F5F5F5;
    }
    ion-content::part(scroll) {
      padding-top: var(--ion-safe-area-top, 0);
    }
  `
})
export class DashboardComponent {

  private readonly supabaseService = inject(SupabaseService);

  session = signal<AuthSession|null>(null);


  signOut = async () => {
    await this.supabaseService.supabase.auth.signOut();
  };
  protected readonly Array = Array;
}
