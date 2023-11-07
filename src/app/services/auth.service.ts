import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User {

  constructor(public username: string, private stayOn: boolean = false, private _token = null, public expirationDate: Date = null) { }
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(private router: Router) { }

  storeUser() {
    localStorage.setItem('lab-auth-user', JSON.stringify(this.user));
  }

  getUser() {
    const userFromStorage = JSON.parse(localStorage.getItem('lab-auth-user'));
    if (userFromStorage) {
      this.user = new User(userFromStorage.username, userFromStorage.stayOn);
    }
  }

  async login(username: string, password: string, stayOn: boolean = false) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username.toLowerCase() === 'admin' &&
          password === 'xyz') {
          resolve(new User('xyz', stayOn));
        } else {
          reject('البيانات غير صحيحة')
        }
      }, 1500);
    })
      .then((user: User) => {
        this.user = user;
        this.storeUser();
        this.router.navigate(['/']);
      });
  }

  autoLogin() {
    this.getUser();
  }
}
