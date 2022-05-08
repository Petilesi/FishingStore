import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account-modify',
  templateUrl: './account-modify.component.html',
  styleUrls: ['./account-modify.component.scss']
})
export class AccountModifyComponent implements OnInit {

  modifyForm = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    }),
    address: new FormControl('')
  });


  constructor(private location: Location, private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const user: User = {
      name: {
        firstName: this.modifyForm.get('name.firstName')?.value,
        lastName: this.modifyForm.get('name.lastName')?.value
      },
      address: this.modifyForm.get('address')?.value
    };
    this.auth.modifyUser(user).then(_ => {
      console.log('Siker');
    }).catch(error => {
      Swal.fire('FishingStore', error, 'error');
    });
  }

  onCancel() {
    this.location.back();
  }



}
