import {signalStore, withMethods, withState} from "@ngrx/signals";

export type TUserState = {
  id:string;
  username:string;
}

export const UserSignalStore = signalStore(
  {providedIn:'root'},
  withState<TUserState>({id:'id',username:''}),
  withMethods(() => {



    return {}
  }),
)
