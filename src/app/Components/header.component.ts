import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'Header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div
      class="flex bg-gray-800 text-white h-[64px] px-4 sm:px-8 items-center justify-between"
    >
      <div>شعار</div>
      <div class="flex gap-4">
        <a
          routerLink="/home"
          routerLinkActive="text-yellow-500"
          class="relative hover:text-yellow-300 hover:after:content-[''] after:absolute after:bg-red-500 "
          >الرئيسية</a
        >
        <a
          routerLink="/products"
          routerLinkActive="text-yellow-500"
          class="hover:text-yellow-300"
          >قائمة المنتجات</a
        >
        <a
          routerLink="/offers"
          routerLinkActive="text-yellow-500"
          class="hover:text-yellow-300"
          >عروض وخصومات</a
        >
      </div>
      <a
        routerLink="/cart"
        routerLinkActive="bg-yellow-900 "
        class="flex px-4 pt-3 pb-2 bg-gray-700 text-yellow-500 rounded-xl hover:bg-gray-600 font-medium text-md"
      >
        🛒 السلة
      </a>
    </div>
  `,
  styles: [``],
})
export class HeaderComponent {}
