import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Input } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { user } from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';
import Swal from 'sweetalert2';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  animations: [
    trigger('onEnter', [
      transition(':enter', [
        style({opacity:0}),
        animate('2s ease-in-out'),
        style({opacity:1}),
      ])
    ])
  ],
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public link: string = "";

  @Input() loggedInUser?: firebase.default.User | null;
  @Output() addProduct = new EventEmitter();


  productObject?: Observable<Array<product>>;
  constructor(private productService: ProductsService, public authService: AuthService, private router: Router, private clipboard: Clipboard) {
    this.productObject = productService.getProducts();
  }

  ngOnInit(): void {
  }

  sharePage() {
    this.clipboard.copy(this.router.url);
  }

  added(){
    Swal.fire('Kosár', 'Tárgy sikeresen kosárba helyezve', 'success');
  }

  getCheap(){
    console.log('bekerult a fuggvenybe');
    this.productObject = this.productService.getProductByPrice();
  }

  deleteFilter(){
    this.productObject = this.productService.getProducts();
  }

}
