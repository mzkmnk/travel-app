import {Component, inject, OnInit, signal } from "@angular/core";
import {SupabaseService} from "@/src/shared/services/supabase.service";
import {AuthSession} from "@supabase/supabase-js";

@Component({
  selector: "app-dashboard",
  template:`
    <div>
      <h1 class="text-3xl">Session</h1>
      <p>email:) {{ session()?.user?.email }}</p>
      <p>id:) {{ session()?.user?.id }}</p>
    </div>
  `
})
export class DashboardComponent implements OnInit {

  private readonly supabaseService = inject(SupabaseService);

  session = signal<AuthSession|null>(null);

  async ngOnInit():Promise<void> {
    const { data ,error } = await this.supabaseService.supabase.auth.getSession();

    if(error) throw error;

    console.log('data',data);

    this.session.set(data.session);
  }
}
