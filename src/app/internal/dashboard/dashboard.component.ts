import {Component, inject, OnInit, signal } from "@angular/core";
import {SupabaseService} from "@/src/shared/services/supabase.service";
import {AuthSession} from "@supabase/supabase-js";
import {IonButton, IonContent} from "@ionic/angular/standalone";
import {UserAPI} from "@/src/shared/api/user.api";
import {map} from "rxjs";

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

  private readonly userAPI = inject(UserAPI);

  session = signal<AuthSession|null>(null);

  async ngOnInit():Promise<void> {
    const { data ,error } = await this.supabaseService.supabase.auth.getSession();

    if(error) throw error;

    this.session.set(data.session);
  }

  test = () => {
    this.userAPI.existUserById({id:'24ab9938-fea9-43ec-93f7-2321542222d1'}).pipe(
      map(data => {console.log(data)})
    ).subscribe()
  };
}
