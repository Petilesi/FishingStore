import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountModifyComponent } from './account-modify.component';

const routes: Routes = [
  {
    path: '', component: AccountModifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountModifyRoutingModule { }
