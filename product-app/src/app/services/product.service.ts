import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Laptop - HP Pavilion',
      price: 999,
      description: 'HP Pavilion laptop with a sleek design, 16GB RAM, and 512GB SSD.',
      imageUrl: 'assets/images/laptop1.jpg'
    },
    {
      id: 2,
      name: 'Smartphone - Samsung Galaxy',
      price: 699,
      description: 'Samsung Galaxy with AMOLED display, 128GB storage and great battery life.',
      imageUrl: 'assets/images/smartphone1.jpg'
    },
    {
      id: 3,
      name: 'Headphones - Logitech Wireless',
      price: 199,
      description: 'Logitech noise-canceling wireless headphones with immersive sound quality.',
      imageUrl: 'assets/images/headphones1.jpg'
    },
    {
      id: 4,
      name: 'Laptop - Apple MacBook Air',
      price: 1299,
      description: 'Apple MacBook with M2 chip, 16GB RAM, 512GB SSD and Retina Display.',
      imageUrl: 'assets/images/laptop2.jpg'
    },
    {
      id: 5,
      name: 'Smartphone - Google Pixel 7 Pro',
      price: 899,
      description: 'Google Pixel 7 Pro with AI-powered camera, 256GB storage and a 120Hz OLED display.',
      imageUrl: 'assets/images/smartphone2.jpg'
    },
    {
      id: 6,
      name: 'Headphones - JBL Live 660NC',
      price: 249,
      description: 'JBL Live 660NC wireless headphones with adaptive noise cancelation and 50 hours of battery life.',
      imageUrl: 'assets/images/headphones2.jpg'
    }
  ];

  // Fetches all products
  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  // Fetches a single product by ID
  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}
