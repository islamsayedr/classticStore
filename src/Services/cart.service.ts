import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartProduct } from '../Models/cartProduct';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartProduct[] = [];
  private itemsNum: BehaviorSubject<number>;
  private totalPrice: BehaviorSubject<number>;
  constructor() {
    this.itemsNum = new BehaviorSubject(this.items.length);
    this.totalPrice = new BehaviorSubject(0);
  }
  addItem(product: CartProduct) {
    this.items.push(product);
    this.itemsNum.next(this.items.length);
    this.updateTotalPrice();
  }
  removeItem(itemID: number, itemSize: string) {
    this.items = this.items.filter((item) => {
      return !(item.id === itemID && item.size === itemSize);
    });
    this.itemsNum.next(this.items.length);
    this.updateTotalPrice();
    return new Observable<CartProduct[]>((obs) => {
      obs.next(this.items);
    });
  }
  increaseQuant(id: number) {
    this.items.forEach((item) => {
      if (item.id === id) {
        if (item.quantity < item.availableQ) {
          item.quantity++;
        } else {
          item.quantity = item.availableQ;
        }
      }
    });
    this.updateTotalPrice();
  }
  decreaseQuant(id: number) {
    this.items.forEach((item) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          item.quantity = 1;
        }
      }
    });
    this.updateTotalPrice();
  }
  getItemsList() {
    return new Observable<CartProduct[]>((obs) => {
      obs.next(this.items);
    });
  }
  get getItemsNum() {
    return this.itemsNum;
  }
  getTotalPrice() {
    this.updateTotalPrice();
    return this.totalPrice;
    // return new Observable<number>((obs) => {
    //   obs.next(this.total);
    // });
  }
  updateTotalPrice() {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price * item.quantity;
    });
    this.totalPrice.next(total);
  }
}
