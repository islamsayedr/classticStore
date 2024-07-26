import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Iproduct[] = [
    {
      id: 1,
      name: 'بنطلون جابردين احمر',
      price: 19.99,
      description:
        'بنطلون جابردين قماشة نضيفة خالية من المواد الضارة, فرز رقم 1',
      image: '/pants.png',
      size: ['30', '32', '34', '36', '38', '40', '42', '44', '46', '48', '50'],
      quantity: 10,
    },
    {
      id: 2,
      name: 'بنطلون جابردين رصاصى',
      price: 29.99,
      description:
        'بنطلون جابردين قماشة نضيفة خالية من المواد الضارة, فرز رقم 1',
      image: '/pants.png',
      size: ['30', '32', '34', '36', '38', '40', '42', '44', '46', '48', '50'],
      quantity: 5,
    },
    {
      id: 3,
      name: 'بنطلون جابردين اسود',
      price: 39.99,
      description:
        'بنطلون جابردين قماشة نضيفة خالية من المواد الضارة, فرز رقم 1',
      image: '/pants.png',
      size: ['30', '32', '34', '36', '38', '40', '42', '44', '46', '48', '50'],
      quantity: 8,
    },
    {
      id: 4,
      name: 'بنطلون جابردين رصاصى',
      price: 29.99,
      description:
        'بنطلون جابردين قماشة نضيفة خالية من المواد الضارة, فرز رقم 1',
      image: '/pants.png',
      size: ['30', '32', '34', '36', '38', '40', '42', '44', '46', '48', '50'],
      quantity: 5,
    },
  ];

  constructor() {}

  // Get all products
  getProducts(): Iproduct[] {
    return this.products;
  }

  // Get product by ID
  getProductById(id: number): Iproduct | undefined {
    return this.products.find((product) => product.id === id);
  }

  // Add a new product
  addProduct(product: Iproduct): void {
    this.products.push(product);
  }

  // Update an existing product
  updateProduct(updatedProduct: Iproduct): void {
    const index = this.products.findIndex(
      (product) => product.id === updatedProduct.id
    );
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  // Delete a product by ID
  deleteProduct(id: number): void {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
