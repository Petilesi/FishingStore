import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: boolean | null;

  constructor(private auth: AngularFireAuth,private afs: AngularFirestore) { this.loggedIn = false }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password).then((cred) => {
      localStorage.setItem("uid",cred.user?.uid!);
      this.loggedIn = true;
    });
  }

  register(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  isUserLoggedIn() {
    return this.auth.user;
  }

  logout() {
    return this.auth.signOut().then(() => {
      localStorage.clear();
      this.loggedIn = false;
    });
  }

  giveEmail() {
    const auth = getAuth();
    const user = auth.currentUser;
    const email = user?.email;
    return email;
  }

  giveUid(){
    const auth = getAuth();
    const user = auth.currentUser;
    return user?.uid;
  }

  deleteUser(){
    const auth = getAuth();
    const user = auth.currentUser;
    user?.delete().then(() =>{
      console.log("Account delete successfull");
    }).catch((error) =>{
      console.log(error);
    });
    return null;
  }

  modifyUser(userData: any){
    return this.afs.collection('Users').doc(this.giveUid()).update(userData);
  }

}
