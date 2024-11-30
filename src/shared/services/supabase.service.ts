import {Injectable} from "@angular/core";
import {createClient, SupabaseClient, User} from "@supabase/supabase-js";
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({providedIn:'root'})
export class SupabaseService {

  supabase:SupabaseClient;

  private currentUser:BehaviorSubject<User|boolean> = new BehaviorSubject<User|boolean>(false);

  constructor() {
    this.supabase =  createClient(environment.supabaseUrl,environment.supabaseKey);

    this.supabase.auth.onAuthStateChange((event, session) => {
      if((event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') && session){
        this.currentUser.next(session?.user);
      }else{
        this.currentUser.next(false);
      }
    });

    this.loadUser().then();
  }

  /** ユーザを取得する */
  loadUser = async ():Promise<void> => {
    if(this.currentUser.value){
      return
    }

    const user = await this.supabase.auth.getUser();

    if(user.data.user){
      this.currentUser.next(user.data.user);
    }else{
      this.currentUser.next(false);
    }
  };

  /** 現在のユーザの状態を取得する */
  getCurrentUser = ():Observable<User|boolean> => {
    return this.currentUser.asObservable();
  };
}
