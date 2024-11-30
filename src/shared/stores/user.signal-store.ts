import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";

export type TUserState = {
  id:string;
  username:string;
}

export const UserSignalStore = signalStore(
  {providedIn:'root'},
  withState<TUserState>({id:'id',username:''}),
  withMethods((signalStore) => {

  const setUser = ({user}:{user:TUserState}):void => {
    patchState(signalStore,{
      ...user
    })
  };

    return {
      setUser,
    }
  }),
)
