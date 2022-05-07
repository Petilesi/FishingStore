import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  productObject?: Array<product>;
  chosenProduct?: product;

  constructor(/*private productService: ProductsService */) { }

  ngOnInit(): void {
    /* this.productService.loadImageMeta('_credits.json').subscribe((data: Array<product>) => {
       this.productObject = data;
     })
   }
 
   loadProduct(productObject: product){
     this.chosenProduct = productObject;
   }
   */
  }
}
