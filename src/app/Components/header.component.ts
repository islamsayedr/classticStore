import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div
      class="flex bg-black text-white h-[64px] px-4 sm:px-8 items-center justify-between"
    >
      <div>شعار</div>
      <div class="flex gap-4">
        <a
          routerLink="/home"
          routerLinkActive="text-yellow-500"
          class="hover:text-yellow-300"
          >الرئيسية</a
        >
        <a
          routerLink="/offers"
          routerLinkActive="text-yellow-500"
          class="hover:text-yellow-300"
          >عروض وخصومات</a
        >
      </div>
      <button
        class="flex px-4 pt-3 pb-2 bg-gray-700 text-yellow-500 rounded-xl hover:bg-gray-600 font-medium text-md"
      >
        اضغط هنا
      </button>
    </div>
  `,
  styles: [``],
})
export class HeaderComponent {}
