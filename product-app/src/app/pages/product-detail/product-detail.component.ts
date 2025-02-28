import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(productId).subscribe(data => this.product = data);
  }
}
