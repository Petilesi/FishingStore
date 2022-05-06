import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    passwordAgain: new FormControl(''),
    name: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    }),
    address: new FormControl('')
  });

  constructor(private location: Location, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe(console.log);
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.get('email')?.value, this.registerForm.get('password')?.value).then(cred => {
        console.log(cred);
    }).catch(error =>{
      console.log(error);
    });
  }

  onCancel() {
    this.location.back();
  }


}
