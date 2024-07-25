import { Injectable } from '@angular/core';
import { Iproduct } from './../Modules/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Iproduct[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      description: 'Description of Product 1',
      image: 'https://via.placeholder.com/150',
      size: ['S', 'M', 'L'],
      color: 'red', // Add this line
      quantity: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      description: 'Description of Product 2',
      image: 'https://via.placeholder.com/150',
      size: ['M', 'L', 'XL'],
      color: 'blue', // Add this line
      quantity: 5,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      description: 'Description of Product 3',
      image: 'https://via.placeholder.com/150',
      size: ['L', 'XL', 'XXL'],
      color: 'green', // Add this line
      quantity: 8,
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

  // Filter products by color
  getProductsByColor(color: string): Iproduct[] {
    return this.products.filter((product) => product.color === color);
  }
}
