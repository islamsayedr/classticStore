import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartProduct } from '../Models/cartProduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartProduct[] = [];
  constructor() {}
  addItem(product: CartProduct) {
    this.items.push(product);
  }
  removeItem(itemID: number, itemSize: string) {
    this.items = this.items.filter((item) => {
      return !(item.id === itemID && item.size === itemSize);
    });
  }
  getCartItems() {
    return this.items;
  }
}
