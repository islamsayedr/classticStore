import { LucideAngularModule } from 'lucide-angular';
import { H3Component } from './typography/h3.component';
import { CartService } from './../../Services/cart.service';
import { Component, Input } from '@angular/core';
import { CartProduct } from '../../Models/cartProduct';
import { FormsModule } from '@angular/forms';
import { NgFor, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'HCard',
  standalone: true,
  imports: [FormsModule, NgFor, H3Component, CurrencyPipe, LucideAngularModule],
  template: `
    <div class="flex p-3 bg-gray-700 rounded-lg gap-4">
      <img
        [src]="item.image"
        alt="item.name"
        class="h-[128px] w-[128px] object-cover rounded-lg"
      />
      <div class="flex-1 flex  flex-col">
        <H3 [text]="item.name"></H3>

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
      <div class="flex gap-4">
        <span class="font-bold text-lg text-purple-300 pt-2">
          {{ item.price | currency : 'EGP ' }}
        </span>
        <span
          (click)="deleteFromCart(item.id)"
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
  @Input() item: CartProduct = {} as CartProduct;
  constructor(private CartService: CartService) {}
  deleteFromCart(itemID: number) {
    this.CartService.removeItem(itemID);
  }
}
