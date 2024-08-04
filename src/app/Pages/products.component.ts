import { ProductsService } from '../../Services/products.service';
import { H1Component } from '../Components/typography/h1.component';
import { CardComponent } from '../Components/card.component';
import { Component } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { NgFor } from '@angular/common';

@Component({
  selector: 'products',
  standalone: true,
  imports: [CardComponent, H1Component, NgFor],
  template: `
    <main>
      <div class="container m-auto">
        <H1>قائمة المنتجات</H1>
        <div
          class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 "
        >
          <Card *ngFor="let item of list" [data]="item" />
        </div>
      </div>
    </main>
  `,
  styles: [``],
})
export class ProductsComponent {
  list: Iproduct[] = [];
  constructor(private ProductsService: ProductsService) {}
  ngOnInit() {
    this.list = this.ProductsService.getProducts();
  }
}
