import { CartService } from './../../../Services/cart.service';
import { NgClass, NgFor } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
@Component({
  selector: 'Header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule, NgFor, NgClass],
  template: `
    <div
      class="flex bg-gray-800 text-white h-[64px] px-4 sm:px-8 items-center justify-between"
    >
      <span
        class="md:hidden p-2 hover:bg-gray-700 rounded-lg"
        (click)="handleClickMenu()"
      >
        <lucide-icon name="Menu" [size]="24" [strokeWidth]="1.5"></lucide-icon>
      </span>

      <a routerLink="/home" class="font-black text-xl">👖 كلاسيك ستور</a>

      <div class="hidden md:flex gap-4">
        <a
          *ngFor="let link of navLinks"
          [routerLink]="link.URL"
          routerLinkActive="text-yellow-500"
          class="relative hover:text-yellow-300 hover:after:content-[''] after:absolute after:bg-red-500 "
          >{{ link.name }}</a
        >
      </div>

      <a
        routerLink="/cart"
        routerLinkActive="bg-yellow-900 "
        class="relative flex items-top px-4 py-3 sm:pt-3 sm:pb-2 bg-gray-700 text-yellow-500 rounded-xl hover:bg-gray-600 font-medium text-md gap-2"
      >
        <lucide-icon name="ShoppingBasket" [size]="20"></lucide-icon>
        <span class="hidden sm:inline-block">السلة</span>
        <span
          class="hidden absolute top-2 right-2 h-[8px] w-[8px] bg-red-400 rounded-full"
          [ngClass]="{ flex: itemsNum < 0 }"
        ></span>
      </a>
    </div>
  `,
  styles: [``],
})
export class HeaderComponent {
  @Output() openSideBar: EventEmitter<boolean>;
  navLinks = [
    { name: 'الرئيسية', URL: '/home' },
    { name: 'قائمة المنتجات', URL: '/products' },
    { name: 'عروض وخصومات', URL: '/offers' },
  ];
  itemsNum: number = 2;
  constructor() {
    this.openSideBar = new EventEmitter<boolean>();
  }
  handleClickMenu() {
    this.openSideBar.emit(true);
  }
}
