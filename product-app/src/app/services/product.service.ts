import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, description: 'Powerful laptop.', imageUrl: 'assets/images/laptop.jpg' },
    { id: 2, name: 'Smartphone', price: 699, description: 'Latest smartphone.', imageUrl: 'assets/images/smartphone.jpg' },
    { id: 3, name: 'Headphones', price: 199, description: 'Noise-canceling headphones.', imageUrl: 'assets/images/headphones.jpg' }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}
