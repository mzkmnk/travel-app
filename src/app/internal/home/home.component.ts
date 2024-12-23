import {Component} from "@angular/core";
import {IonContent} from "@ionic/angular/standalone";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  imports: [
    IonContent,
    NgOptimizedImage
  ],
  template: `
    <ion-content>
      <div class="flex flex-col items-center gap-3">
        <div class="flex items-center flex-col w-[345px] min-h-[465px] rounded-3xl bg-white pb-1">
          <div class="flex-1 relative min-w-full">
            <img class="rounded-3xl" ngSrc="assets/icon/BusinessTrip.svg" fill alt="Trip Trip"/>
          </div>
          <div class="w-full h-full flex flex-col px-5 py-1 gap-2">
            <div class="bg-[#28A745] w-[51px] flex items-center justify-center rounded-md">
              <p class="text-white text-sm">Plan</p>
            </div>
            <h3 class="font-semibold text-lg">横浜</h3>
            <p>米津さんのライブや</p>
            <p class="text-right text-sm">2025/01/23</p>
          </div>
        </div>

        <div class="flex items-center flex-col w-[345px] min-h-[465px] rounded-3xl bg-white pb-1">
          <div class="flex-1 relative min-w-full">
            <img class="rounded-3xl" ngSrc="assets/sumples/sumple1.jpg" fill alt="Trip Trip"/>
          </div>
          <div class="w-full h-full flex flex-col px-5 py-1 gap-2">
            <div class="bg-[#28A745] w-[51px] flex items-center justify-center rounded-md">
              <p class="text-white text-sm">Plan</p>
            </div>
            <h3 class="font-semibold text-lg">横浜</h3>
            <p>米津さんのライブや</p>
            <p class="text-right text-sm">2025/01/23</p>
          </div>
        </div>

        <div class="flex items-center flex-col w-[345px] min-h-[465px] rounded-3xl bg-white pb-1">
          <div class="flex-1 relative min-w-full">
            <img class="rounded-3xl" ngSrc="assets/icon/BusinessTrip.svg" fill alt="Trip Trip"/>
          </div>
          <div class="w-full h-full flex flex-col px-5 py-1 gap-2">
            <div class="bg-[#28A745] w-[51px] flex items-center justify-center rounded-md">
              <p class="text-white text-sm">Plan</p>
            </div>
            <h3 class="font-semibold text-lg">横浜</h3>
            <p>米津さんのライブや</p>
            <p class="text-right text-sm">2025/01/23</p>
          </div>
        </div>
      </div>
    </ion-content>
  `,
  styles: `
    ion-content::part(scroll) {
      padding: var(--ion-safe-area-top, 0) var(--ion-safe-area-right, 0) 90px var(--ion-safe-area-left, 0); // todo bottom size
    }

    ion-content {
      --background: #F9F9F9;
    }
  `
})
export class HomeComponent {
}
