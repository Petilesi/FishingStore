import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  productObject?: Observable<Array<product>>;
  constructor(private productService: ProductsService) {this.productObject = productService.getProducts() }

  ngOnInit(): void {

  }

}
