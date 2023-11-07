import { Injectable } from '@angular/core';
import { UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    if (!!this.authService.user) {
      return true;
    } else {
      return this.router.createUrlTree(['/auth/login']);
    }
  }
}