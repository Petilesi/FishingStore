import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/shared/services/products.service';
import {Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() loggedInUser?: firebase.default.User | null;


  productObject?: Observable<Array<product>>;
  constructor(private productService: ProductsService) {this.productObject = productService.getProducts() }

  ngOnInit(): void {

  }

}
