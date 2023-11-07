import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guard/auth.guard';
import { NotAuthGuard } from './guard/not-auth.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: AdminComponent },
  {
    path: 'auth', canActivate: [NotAuthGuard], component: AuthComponent, children: [
      { path: 'login', component: LoginComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
