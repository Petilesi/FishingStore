import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountModifyComponent } from './account-modify.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AccountModifyRoutingModule } from './account-modify-routing.module';


@NgModule({
  declarations: [AccountModifyComponent],
  imports: [
    CommonModule,
    AccountModifyRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class AccountModifyModule { }
