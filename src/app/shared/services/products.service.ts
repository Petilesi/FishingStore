import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { product } from '../models/product';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productObject?: Array<product>;
  
  collectionName = 'Products';

  constructor(private http: HttpClient, private afs: AngularFirestore,private storage: AngularFireStorage) { }


  loadImageMeta(metaUrl: string): Observable<Array<product>> {
  
    return this.afs.collection<product>(this.collectionName).valueChanges();
  }

  loadImg(image_url: string) {
    return this.storage.ref(image_url).getDownloadURL();
  }
}
