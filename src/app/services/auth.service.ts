import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User {

  constructor(public username: string, public firstName: string, public lastName: string, private stayOn: boolean = false, private _token = null, public expirationDate: Date = null) { }

  get name(): string {
    return this.firstName + ' ' + this.lastName;
  }
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;

  private staorageAuthKey: string = 'auth-user';

  constructor(private router: Router) { }

  storeUser() {
    localStorage.setItem(this.staorageAuthKey, JSON.stringify(this.user));
  }

  getUser() {
    const userFromStorage = JSON.parse(localStorage.getItem(this.staorageAuthKey));
    if (userFromStorage) {
      this.user = new User(userFromStorage.username, userFromStorage.firstName, userFromStorage.lastName, userFromStorage.stayOn);
    }
  }

  async login(username: string, password: string, stayOn: boolean = false) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username.toLowerCase() === 'admin' &&
          password === '123') {
          resolve(new User(username, 'Abdelrhman', 'Mohamed', stayOn));
        } else {
          reject('البيانات غير صحيحة')
        }
      }, 1000);
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

  logout() {
    localStorage.removeItem(this.staorageAuthKey);
    this.user = null;
    this.router.navigate(['auth', 'login']);
  }
}
