import {Component, inject, Signal} from "@angular/core";
import {UploadSignalStore} from "@/src/shared/stores/upload.signal-store";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {GalleryPhoto} from "@capacitor/camera";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-upload',
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton,
    NgOptimizedImage,
  ],
  template: `
    <ion-content>
      <div class="flex items-center justify-between">
        <ion-button fill="clear">
          <img ngSrc="assets/icon/ArrowLeft.svg" height="35" width="35" alt="back icon">
        </ion-button>
      </div>
      <div class="scroll-pl-6 px-6 snap-x flex items-center gap-2 overflow-x-auto">
        @for(photo of selectedPhotos();let i = $index; track i){
          <img class="snap-start rounded-xl object-fill min-w-72 min-h-96" [src]="photo.webPath" alt="mock">
        }
        <!-- <div class="snap-start relative min-w-72 min-h-96"> -->
        <!--   <img class="rounded-xl" ngSrc="assets/mock/mock1.jpg" alt="mock" fill priority> -->
        <!-- </div> -->
      </div>
    </ion-content>
  `,
  styles:`
    ion-content::part(scroll) {
      padding-top: var(--ion-safe-area-top, 0);
      padding-bottom: var(--ion-safe-area-bottom, 0);
    }
  `
})
export class UploadComponent {

  private readonly uploadSignalStore = inject(UploadSignalStore);

  selectedPhotos:Signal<GalleryPhoto[]> = this.uploadSignalStore.photos;
}
