import {Component, CUSTOM_ELEMENTS_SCHEMA, inject} from "@angular/core";
import {IonBackButton, IonButton, IonButtons, IonContent} from "@ionic/angular/standalone";
import {NgOptimizedImage} from "@angular/common";
import {Camera} from "@capacitor/camera";
import {UploadSignalStore} from "@/src/shared/stores/upload.signal-store";
import {RouterSignalStore} from "@/src/shared/stores/router.signal-store";

@Component({
  selector: "app-dashboard",
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonContent,
    NgOptimizedImage,
    IonButton,
  ],
  template: `
    <ion-content class="ion-content-bg-primary">
      <div class="flex items-center justify-between">
        <ion-button fill="clear" (click)="uploadPhotos()">
          <img ngSrc="assets/icon/AddOutline.svg" height="35" width="35" alt="image add icon">
        </ion-button>
      </div>
      <div class="flex items-center flex-col gap-3">
        @for(i of Array(10).fill(0);let j = $index; track j){
          <div class="flex flex-col gap-6 bg-white rounded-[30px] w-11/12 h-[35rem] p-4">
            <div class="flex items-center justify-between">
              <div class="flex gap-2 items-center">
                <div class="w-14 h-14 relative mx-auto max-w-md rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-0.5 shadow-lg">
                  <div class="flex items-center justify-center w-full h-full bg-white rounded-full">
                    <img ngSrc="assets/icon/ServiceIcon.png" height="32" width="32" alt="service icon png">
                  </div>
                </div>
                <div class="flex flex-col">
                  <p class="font-semibold">MzkMnk</p>
                  <p class="text-slate-500">404 not found</p>
                </div>
              </div>
              <img ngSrc="assets/icon/DotsHorizontalOutline.svg" height="30" width="30" alt="dots">
            </div>
            <swiper-container class="relative w-full h-3/4" speed="500">
              <swiper-slide>
                <img class="rounded-xl" ngSrc="assets/mock/mock1.jpg" alt="mock" fill priority>
              </swiper-slide>
              <swiper-slide>
                <img class="rounded-xl" ngSrc="assets/mock/mock2.jpg" alt="mock" fill priority>
              </swiper-slide>
            </swiper-container>
          </div>
        }
      </div>
    </ion-content>
  `,
  styles:`
    ion-content {
      --background: #F5F5F5;
    }
    ion-content::part(scroll) {
      padding-top: var(--ion-safe-area-top, 0);
      padding-bottom: var(--ion-safe-area-bottom, 0);
    }
  `
})
export class DashboardComponent {

  private readonly uploadSignalStore = inject(UploadSignalStore);

  private readonly routerSignalStore = inject(RouterSignalStore);

  uploadPhotos = async ():Promise<void> => {

    // await Camera.requestPermissions({permissions:['camera','photos']});

    const {photos} = await Camera.pickImages({
      quality:100,
      presentationStyle:'popover',
      limit:15,
    });

    this.uploadSignalStore.setGalleryPhotos({photos});

    await this.routerSignalStore.navigate({path:'internal/upload'})
  };

  protected readonly Array = Array;
}
