import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";
import {GalleryPhoto} from "@capacitor/camera";

export const UploadSignalStore = signalStore(
  {providedIn:'root'},
  withState<{photos:GalleryPhoto[]}>({photos:[]}),
  withMethods((signalStore) => {

    /** ユーザが選択した画像をセットする */
    const setGalleryPhotos = ({photos}:{photos:GalleryPhoto[]}) => {
      patchState(signalStore,{photos})
    };

    return {
      setGalleryPhotos,
    }
  }),
)
