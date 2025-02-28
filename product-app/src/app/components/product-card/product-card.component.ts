import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  /** 
   * Receives product details from the parent component 
   */
  @Input() product!: Product;
  /** 
   * Emits an event when View Details button is clicked 
   */
  @Output() viewDetails = new EventEmitter<number>();

  /**
   * Handles click event on View Details button
  
   */
  onViewDetails() {
    this.viewDetails.emit(this.product.id);
  }
}
