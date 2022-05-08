import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = 'Users';
  private user;


  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {this.user = auth.currentUser }

  create(user: User){
    return this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
  }

  getAll(){

  }

  update(){
    
  }

  delete(){

  }
}
