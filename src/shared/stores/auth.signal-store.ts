import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";
import {User} from "@supabase/supabase-js";


export const AuthSignalStore = signalStore(
  {providedIn:'root'},
  withState<{user:User & {username:string}|boolean|undefined,loading:boolean}>({user:undefined,loading:false}),
  withMethods((signalStore) => {

    const setLoading = ({loadingState}:{loadingState:boolean}) => {
      patchState(signalStore,{loading:loadingState});
    };

    const setUser = ({user}:{user:User & {username:string}}) =>{
      patchState(signalStore,{user:user});
    }

    return {
      setLoading,
      setUser
    }
  })
)
