import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/models/user'
import { UserService } from 'src/app/shared/services/user.service';

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

  constructor(private location: Location, private authService: AuthService, private userService: UserService) {

  }

  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe(console.log);
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.get('email')?.value, this.registerForm.get('password')?.value).then(cred => {
      console.log(cred);
      const user: User = {
        id: cred.user?.uid as string,
        email: this.registerForm.get('email')?.value,
        name: {
          firstName: this.registerForm.get('name.firstName')?.value,
          lastName: this.registerForm.get('name.lastName')?.value
        },
        address: this.registerForm.get('address')?.value
      };


      this.userService.create(user).then(_ => {
        console.log('User added successfully');
      }).catch(error => {
        console.error(error);
      });
    }).catch(error => {
      console.error(error);
    });
  }

  onCancel() {
    this.location.back();
  }


}
