import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { CartProduct } from '../Models/cartProduct';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnChanges {
  private items: CartProduct[] = [];
  totalPrice = 0;
  constructor() {}
  addItem(product: CartProduct) {
    this.items.push(product);
  }
  removeItem(itemID: number) {
    this.items = this.items.filter((item) => item.id !== itemID);
  }

  getCartItems() {
    return this.items;
  }
  getTotalPrice() {
    this.items.forEach((item) => {
      this.totalPrice += item.price * item.quantity;
    });
    return this.totalPrice;
  }
  ngOnChanges(changes: SimpleChanges): void {}
}
