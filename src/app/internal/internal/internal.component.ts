import {Component} from "@angular/core";
import {BottomNavBarComponent} from "../../shared/components/bottom-nav-bar/bottom-nav-bar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-internal',
  imports: [
    BottomNavBarComponent,
    RouterOutlet
  ],
  template: `
    <div class="flex flex-col h-screen">
      <div class="flex-1">
        <router-outlet></router-outlet>
      </div>
      <app-bottom-nav-bar></app-bottom-nav-bar>
    </div>
  `
})
export class InternalComponent {
}
