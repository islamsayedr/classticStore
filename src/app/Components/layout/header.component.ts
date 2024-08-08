import { AuthService } from './../../../Services/auth.service';
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
import { GalleryThumbnails, LucideAngularModule } from 'lucide-angular';
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

      <a routerLink="/home" class="font-black text-xl">٩ كلاسيك</a>

      <div class="hidden md:flex gap-4">
        <a
          *ngFor="let link of navLinks"
          [routerLink]="link.URL"
          routerLinkActive="text-yellow-500"
          class="relative hover:text-yellow-300 hover:after:content-[''] after:absolute after:bg-red-500 "
          >{{ link.name }}</a
        >
      </div>
      <div class="flex gap-2">
        <a
          routerLink="/cart"
          routerLinkActive="bg-yellow-900 "
          class="relative flex items-top px-4 py-3 sm:pt-3 sm:pb-2 bg-gray-700 text-yellow-500 rounded-xl hover:bg-gray-600 font-medium text-md gap-2"
        >
          <lucide-icon name="ShoppingBasket" [size]="20"></lucide-icon>
          <span class="hidden sm:inline-block">السلة</span>
          <span
            class=" absolute top-2 right-2 h-[8px] w-[8px] bg-red-400 rounded-full"
            [hidden]="!(itemsNum > 0)"
          ></span>
        </a>
        <!-- <button
          (click)="login()"
          [hidden]="isUserLoged"
          class="h-[44px] px-3 bg-yellow-200 text-yellow-900 rounded-full "
        >
          <lucide-icon name="LogIn" [size]="20"></lucide-icon>
        </button>
        <button
          (click)="logout()"
          [hidden]="!isUserLoged"
          class="h-[44px] px-3 bg-red-200 text-yellow-900 rounded-full"
        >
          <lucide-icon name="LogOut" [size]="20"></lucide-icon>
        </button> -->
      </div>
    </div>
  `,
  styles: [``],
})
export class HeaderComponent implements OnInit {
  @Output() openSideBar: EventEmitter<boolean>;
  navLinks = [
    { name: 'الرئيسية', URL: '/home' },
    { name: 'قائمة المنتجات', URL: '/products' },
    { name: 'عروض وخصومات', URL: '/offers' },
  ];
  itemsNum: number = 0;
  isUserLoged: boolean = false;
  constructor(
    private CartService: CartService,
    private AuthService: AuthService
  ) {
    this.openSideBar = new EventEmitter<boolean>();
  }
  handleClickMenu() {
    this.openSideBar.emit(true);
  }
  ngOnInit(): void {
    this.CartService.getItemsNum.subscribe((num) => {
      this.itemsNum = num;
    });
    this.AuthService.isUserLogedIn.subscribe((status) => {
      this.isUserLoged = status;
    });
  }
  login() {
    this.AuthService.login('islamsayedr@Gmail.com', '123456');
    console.log(this.isUserLoged);
  }
  logout() {
    this.AuthService.logout();
    console.log(this.isUserLoged);
  }
}
