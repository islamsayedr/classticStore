import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'sideBar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor, NgIf],
  template: `
    <div class="fixed top-0 right-0 w-full h-[100vh] flex z-10" *ngIf="isOpen">
      <div class="w-[70%] h-full flex flex-col gap-2 pt-[64px]  bg-gray-800">
        <a
          *ngFor="let link of navLinks"
          [routerLink]="link.URL"
          routerLinkActive="text-yellow-300 bg-yellow-950 border-solid border-yellow-300 border-r-[5px] "
          class="relative hover:text-yellow-300  px-[16px] py-[16px]"
          (click)="closeSideBar()"
          >{{ link.name }}</a
        >
      </div>
      <div
        class="flex-1 bg-gray-800 opacity-[24%]"
        (click)="closeSideBar()"
      ></div>
    </div>
  `,
  styles: [``],
})
export class SideBarComponent {
  @Input() isOpen?: boolean;
  @Output() areaClicked: EventEmitter<boolean>;
  navLinks = [
    { name: 'الرئيسية', URL: '/home' },
    { name: 'قائمة المنتجات', URL: '/products' },
    { name: 'عروض وخصومات', URL: '/offers' },
  ];
  constructor() {
    this.areaClicked = new EventEmitter<boolean>();
  }
  closeSideBar() {
    this.areaClicked.emit(false);
    // this.isOpen = false;
  }
}
