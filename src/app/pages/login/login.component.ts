import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FrontendLoadingService } from 'src/app/shared/services/frontend-loading.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');


  loading: boolean = false;

  constructor(private router: Router, private loadingService: FrontendLoadingService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    /* this.loading = true;
     this.loadingService.loading().then((data: number) => {
       if (data === 3) {
         if (this.email.value === 'test@gmail.com' && this.password.value === 'test') {
           this.router.navigateByUrl('/main');
           console.log('Sikeres bejelentkezés!');
           this.loading = false;
         } else {
           console.error('Helytelen jelszó vagy felhasználónév');
           this.loading = false;
         }
       }
     }).catch(error => {
       console.error(error);
     }).finally(() => {
       console.log('finally');
       this.loading = false;
     })
 
   } */



    this.authService.login(this.email.value, this.password.value).then(cred => {
        console.log(cred);
        this.router.navigateByUrl('/main');
        this.loading = false;
      }).catch(error => {
        console.error(error);
        this.loading = false;
        Swal.fire('FishingStore', 'Sikertelen bejelentkezés' ,'error');
      });
  }
}
