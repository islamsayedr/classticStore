import { LucideAngularModule } from 'lucide-angular';
import { H3Component } from './typography/h3.component';
import { CartService } from './../../Services/cart.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProduct } from '../../Models/cartProduct';
import { FormsModule } from '@angular/forms';
import { NgFor, CurrencyPipe, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'HCard',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgIf,
    H3Component,
    CurrencyPipe,
    LucideAngularModule,
    NgClass,
  ],
  template: `
    <div class="flex p-3 bg-gray-700 rounded-lg gap-4">
      <img
        [src]="item.image"
        alt="item.name"
        class="h-[128px] w-[128px] object-cover rounded-lg"
      />
      <div class="flex-1 flex  flex-col justify-between">
        <H3 [text]="item.name"></H3>
        <div class="flex gap-6 w-full">
          <div class="relative  flex flex-col ">
            <label
              for="size"
              class="absolute top-[-20px] text-[11px] text-gray-100 bg-yellow-800 p-1 rounded-md"
            >
              المقاس</label
            >
            <select
              name="size"
              [(ngModel)]="item.size"
              class="flex bg-gray-600 p-2 rounded-lg w-[72px] appearance-none text-center "
            >
              <option *ngFor="let s of item.sizes" [value]="s">
                {{ s }}
              </option>
            </select>
          </div>
          <div class="relative flex-1 flex flex-col ">
            <label
              for="quantity"
              class="absolute top-[-20px] text-[11px] text-gray-100 bg-yellow-800 p-1 rounded-md cursor-pointer"
            >
              الكمية</label
            >
            <input
              name="quantity"
              [(ngModel)]="item.quantity"
              class="flex bg-gray-600 p-2 rounded-lg w-[128px] appearance-none text-center "
            />
            <span
              *ngIf="item.quantity === item.availableQ"
              class="text-red-300 text-sm pt-1"
              >لقد وصلت للحد الاقصى من المنتجات المتاحة</span
            >
            <span
              (click)="increaseQ()"
              class="absolute top-[4px] right-[8px] p-1 bg-gray-500 rounded-full cursor-pointer"
            >
              <lucide-icon name="Plus" [size]="24"></lucide-icon>
            </span>
            <span
              (click)="decreaseQ()"
              class="absolute top-[4px] right-[92px] p-1 bg-gray-500 rounded-full cursor-pointer"
              ><lucide-icon name="Minus" [size]="24"></lucide-icon
            ></span>
          </div>
        </div>
      </div>
      <div class="flex gap-4">
        <span class="font-bold text-lg text-purple-300 pt-2">
          {{ item.price | currency : 'EGP ' }}
        </span>
        <span
          (click)="deleteFromCart(item.id, item.size)"
          class=" cursor-pointer p-3 bg-red-300 h-fit rounded-full"
        >
          <lucide-icon name="DeleteIcon" [size]="24" color="red"></lucide-icon>
        </span>
      </div>
    </div>
  `,
  styles: [``],
})
export class HCardComponent {
  @Output() removeBtnClicked: EventEmitter<any>;
  @Input() item: CartProduct = {} as CartProduct;
  constructor(private CartService: CartService) {
    this.removeBtnClicked = new EventEmitter<any>();
  }
  deleteFromCart(itemID: number, itemSize: string) {
    this.removeBtnClicked.emit({ itemID, itemSize });
  }
  increaseQ() {
    if (this.item.quantity < this.item.availableQ) {
      this.item.quantity += 1;
    } else {
      this.item.quantity = this.item.availableQ;
    }
  }
  decreaseQ() {
    if (this.item.quantity > 1) {
      this.item.quantity -= 1;
    } else {
      this.item.quantity = 1;
    }
  }
}
