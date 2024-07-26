import { H2Component } from './../Components/typography/h2.component';
import { NgFor, CurrencyPipe, NgIf, NgClass } from '@angular/common';
import { CartProduct } from './../../Models/cartProduct';
import { CartService } from './../../Services/cart.service';
import { Component, OnChanges } from '@angular/core';
import { H1Component } from '../Components/typography/h1.component';
import { FormsModule } from '@angular/forms';
import { HCardComponent } from '../Components/hcard.component';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [
    NgFor,
    H1Component,
    FormsModule,
    HCardComponent,
    H2Component,
    CurrencyPipe,
    NgIf,
    LucideAngularModule,
    NgClass,
  ],
  template: `
    <main>
      <div class="container m-auto">
        <H1 text="السلة"></H1>
        <div class=" flex flex-col gap-4  bg-gray-800 rounded-lg p-4">
          <H2 text="محتوى السلة"></H2>
          <div
            *ngIf="items.length === 0"
            class="h-[200px] flex flex-col gap-3 items-center justify-center bg-gray-700 text-gray-400 rounded-lg "
          >
            <lucide-icon
              name="PackageSearch"
              [size]="50"
              strokeWidth="1.5"
            ></lucide-icon>
            لا يوجد منتجات فى السلة...
          </div>
          <HCard *ngFor="let item of items" [item]="item" />
          <hr />
          <div class="flex justify-between">
            <p class="text-lg">
              السعر الاجمالى: {{ total | currency : 'EGP ' }}
            </p>
            <p class="text-lg">عدد المنتجات: {{ items.length }}</p>
          </div>
        </div>
        <button
          class="flex h-[50px] px-6 bg-yellow-600 items-center justify-center rounded-lg mt-6 w-full disabled:bg-gray-600"
          [disabled]="items.length === 0"
        >
          اطلب الان
        </button>
      </div>
    </main>
  `,
  styles: [``],
})
export class CartComponent implements OnChanges {
  items: CartProduct[] = [];
  total = 0;
  constructor(private CartService: CartService) {
    this.items = this.CartService.getCartItems();
    this.total = this.CartService.getTotalPrice();
  }
  ngOnChanges(): void {
    this.items = this.CartService.getCartItems();
    this.total = this.CartService.getTotalPrice();
  }
}
