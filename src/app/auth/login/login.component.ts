import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;
  loginForm: FormGroup;
  error: string;
  submitting: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(
        null,
        [Validators.required, Validators.minLength(3)],
      ),
      password: new FormControl(
        null,
        [Validators.required, Validators.minLength(3)],
      ),
      stayOn: new FormControl(true),
    });
  }

  showHidePassword(element: HTMLInputElement) {
    this.showPassword = !this.showPassword;
    setTimeout(() => {
      element.setSelectionRange(element.value.length, element.value.length);
      element.focus();
    }, 500)
  }

  disableForm() {
    this.loginForm.get('username').disable()
    this.loginForm.get('password').disable()
    this.loginForm.get('stayOn').disable()
  }

  enableForm() {
    this.loginForm.get('username').enable()
    this.loginForm.get('password').enable()
    this.loginForm.get('stayOn').enable()
  }

  onLogin() {
    this.disableForm();
    this.submitting = true;
    this.error = null;
    this.authService
      .login(this.loginForm.value.username, this.loginForm.value.password, this.loginForm.value.stayOn)
      .catch((error) => {
        this.error = error;
        this.enableForm();
        this.submitting = false;
      });
  }
}
