import { CartService } from './../../Services/cart.service';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { CurrencyPipe, NgFor } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'Card',
  standalone: true,
  imports: [CurrencyPipe, LucideAngularModule, NgFor, FormsModule],
  template: `
    <div class="  bg-gray-800 p-3 flex flex-col gap-1 rounded-2xl">
      <!-- <div class="h-48 bg-gray-700 rounded-xl"></div> -->
      <img
        [src]="data.image"
        [alt]="data.name"
        class=" h-[500px] bg-gray-700 rounded-xl object-cover"
      />

      <div class="flex flex-col gap-4">
        <div flex flex-col>
          <div class="flex flex-row justify-between">
            <div class="flex flex-col py-2 gap-1">
              <span class="text-xl font-bold">{{ data.name }}</span>
              <p class="text-xs text-gray-400">
                الكمية المتوفرة: {{ data.quantity }}
              </p>
            </div>
            <span class="font-bold text-lg text-purple-300 pt-2">
              {{ data.price | currency : 'EGP ' : 'symbol' }}
            </span>
          </div>
          <p class="text-gray-400 truncate  ">
            {{ data.description }}
          </p>
        </div>
        <div class="flex flex-row gap-2">
          <select
            name="size"
            [(ngModel)]="chosenSize"
            (change)="newSize()"
            class="flex bg-gray-700 px-2 rounded-lg w-[72px] appearance-none text-center "
          >
            <option *ngFor="let s of data.size" [value]="s">{{ s }}</option>
          </select>
          <button
            (click)="addToCart()"
            #cartBtn
            class="flex flex-1 justify-center gap-2 hover:bg-yellow-600 text-yellow-100 border-yellow-600 border-solid border-[1px] pt-3 pb-2 rounded-lg disabled:border-gray-500 disabled:hover:bg-gray-700 disabled:text-gray-400"
          >
            <lucide-icon name="ShoppingBasket" [size]="18"></lucide-icon>
            <span>اضف للسلة</span>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      select {
      }
    `,
  ],
})
export class CardComponent {
  @Input() data: Iproduct = {
    id: 0,
    name: 'اسم المنتج...',
    price: 0,
    description: 'وصف المنتج',
    image: 'https://via.placeholder.com/150',
    size: ['30', '32', '34', '36', '38', '40', '42', '44', '46', '48', '50'],
    quantity: 0,
  };
  chosenSize: string = this.data.size[0];
  constructor(private CartService: CartService) {}
  @ViewChild('cartBtn') addBtn!: ElementRef;

  addToCart() {
    this.CartService.addItem({
      id: this.data.id,
      name: this.data.name,
      price: this.data.price,
      size: this.chosenSize,
      sizes: this.data.size,
      quantity: 0,
      image: this.data.image,
    });
    this.addBtn.nativeElement.disabled = true;
  }
  newSize() {
    this.addBtn.nativeElement.disabled = false;
  }
}
