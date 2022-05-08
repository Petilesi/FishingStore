import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { product } from '../models/product';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  productObject?: Array<product>;

  collectionName = 'Products';

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage, authService: AuthService) {
  }


  getProducts(): Observable<Array<product>> {
    return this.afs.collection<product>(this.collectionName).valueChanges();
  }

  loadImg(image_url: string) {
    return this.storage.ref(image_url).getDownloadURL();
  }

  getProductByPrice() {
    return this.afs.collection<product>("Products", items => items.where('price', '<=', '15000')).valueChanges();
  }
}
