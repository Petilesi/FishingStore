import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FrontendLoadingService } from 'src/app/shared/services/frontend-loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');


  loading: boolean = false;

  constructor(private router: Router, private loadingService: FrontendLoadingService) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
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
  }


}
