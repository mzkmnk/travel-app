import {Component} from "@angular/core";

@Component({
  selector: 'app-bottom-nav-bar',
  template: `
    <div class="px-7 pt-2 w-full min-h-14 bg-white fixed bottom-0 left-0">
      <div class="flex items-center justify-around">

        <button (click)="clickBottomItem({idx:0})">
          <div class="flex items-center gap-2">

            <svg [class]="nowItem === 'home' ? 'stroke-[#3672C1]':''" stroke="currentColor" width="28" height="28"
                 viewBox="0 0 34 34" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.0027 26.3022V21.5029M13.9152 2.01786L2.82884 10.8965C1.58102 11.8884 0.781145 13.984 1.0531 15.5518L3.18078 28.2859C3.56472 30.5575 5.7404 32.3973 8.04405 32.3973H25.9613C28.249 32.3973 30.4407 30.5416 30.8246 28.2859L32.9523 15.5518C33.2082 13.984 32.4084 11.8884 31.1766 10.8965L20.0902 2.03385C18.3785 0.65806 15.6109 0.65806 13.9152 2.01786Z"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
        </button>


        <button (click)="clickBottomItem({idx:1})">
          <div class="flex items-center gap-2">

            <svg [class]="nowItem === 'add' ? 'stroke-[#3672C1]':''" stroke="currentColor" width="28" height="28"
                 viewBox="0 0 34 34"
                 fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 10.6V23.4M10.6 17H23.4M33 17C33 25.8366 25.8366 33 17 33C8.16344 33 1 25.8366 1 17C1 8.16344 8.16344 1 17 1C25.8366 1 33 8.16344 33 17Z"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>


          </div>
        </button>

        <button (click)="clickBottomItem({idx:2})">
          <div class="flex items-center gap-2">
            <svg [class]="nowItem === 'user' ? 'stroke-[#3672C1]':''" stroke="currentColor" width="22" height="26"
                 viewBox="0 0 25 29"
                 fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.7917 28.032C23.7917 22.872 18.6583 18.6986 12.3383 18.6986C6.01834 18.6986 0.88501 22.872 0.88501 28.032M19.005 8.03197C19.005 11.7139 16.0202 14.6986 12.3383 14.6986C8.65644 14.6986 5.67167 11.7139 5.67167 8.03197C5.67167 4.35007 8.65644 1.3653 12.3383 1.3653C16.0202 1.3653 19.005 4.35007 19.005 8.03197Z"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </button>

      </div>
    </div>
  `,
})
export class BottomNavBarComponent {

  nowItem: TItem = 'home';

  items: TItem[] = ['home', 'add', 'user'];

  clickBottomItem = ({idx}: { idx: number }): void => {
    this.nowItem = this.items[idx];
  };
}

export type TItem = 'home' | 'add' | 'user';
