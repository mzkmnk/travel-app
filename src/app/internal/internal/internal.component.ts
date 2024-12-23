import {Component} from "@angular/core";
import {BottomNavBarComponent} from "../../shared/components/bottom-nav-bar/bottom-nav-bar.component";
import {IonRouterOutlet} from "@ionic/angular/standalone";

@Component({
  selector: 'app-internal',
  imports: [
    BottomNavBarComponent,
    IonRouterOutlet
  ],
  template: `
    <div class="flex flex-col h-screen">
      <div class="flex-1">
        <ion-router-outlet></ion-router-outlet>
      </div>
      <app-bottom-nav-bar></app-bottom-nav-bar>
    </div>
  `
})
export class InternalComponent {
}
