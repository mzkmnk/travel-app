import {Component, inject, OnInit, signal } from "@angular/core";
import {SupabaseService} from "@/src/shared/services/supabase.service";
import {AuthSession} from "@supabase/supabase-js";
import {IonButton, IonContent} from "@ionic/angular/standalone";

@Component({
  selector: "app-dashboard",
  imports: [
    IonContent,
    IonButton
  ],
  template: `
    <ion-content>
      <div>
        <h1 class="text-3xl">Session</h1>
        <p>email:) {{ session()?.user?.email }}</p>
        <p>id:) {{ session()?.user?.id }}</p>
      </div>

      <ion-button (click)="test()">test</ion-button>

      <ion-button (click)="signOut()">sign out</ion-button>
    </ion-content>
  `,
  styles:`
    ion-content::part(scroll) {
      padding-top: var(--ion-safe-area-top, 0);
    }
  `
})
export class DashboardComponent implements OnInit {

  private readonly supabaseService = inject(SupabaseService);

  session = signal<AuthSession|null>(null);

  async ngOnInit():Promise<void> {
    const { data ,error } = await this.supabaseService.supabase.auth.getSession();

    if(error) throw error;

    this.session.set(data.session);
  }

  test = async () => {
    await this.supabaseService.supabase.auth.setSession({access_token:'',refresh_token:''})
    // this.userAPI.create({
    //   "id":"b2f1d8e9-19cc-4b31-bfc5-6b2520b764d6",
    //   "username":"test",
    //   "email":"mzkmnk"
    // }).pipe(
    //   map(data => {})
    // ).subscribe()
  };

  signOut = async () => {
    await this.supabaseService.supabase.auth.signOut();
  };
}
