import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var isAutheticated = localStorage.getItem("uid");
    console.log(!isAutheticated);
    if (isAutheticated === null) {
      Swal.fire('Böngésző', 'Hozzáférés megtagadva', 'error');
      this.router.navigate(['/main']);

    }
    console.log('volt login');
    return true;
  }

}
