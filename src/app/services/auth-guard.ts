import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authToken = sessionStorage.getItem('auth-token');
    if (authToken) {
      return true;
    } else {
      // Option A — navigate and return false
      this.router.navigate(['/login']);
      return false;

      // Option B — return a UrlTree (preferred for guards without side-effects)
      // return this.router.createUrlTree(['/login']);
    }
  }
}
