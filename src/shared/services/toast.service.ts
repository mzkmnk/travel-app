import {inject, Injectable} from "@angular/core";
import {ToastController} from "@ionic/angular/standalone";
import {ToastOptions} from "@ionic/angular";

@Injectable({providedIn:'root'})
export class ToastService {
  private readonly toastCtrl = inject(ToastController);

  /**
   * トーストを表示する
   * @param toastOptions
   */
  presentToast = async ({toastOptions}:{toastOptions:ToastOptions}) => {
    const toast = await this.toastCtrl.create({duration:5000,...toastOptions});

    await toast.present();

    return toast;
  };
}
