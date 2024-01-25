import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { SidebarComponent } from './admin/layout/sidebar/sidebar.component';
import { MenuItemComponent } from './admin/layout/sidebar/menu-item/menu-item.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { MainComponent } from './admin/layout/main/main.component';
import { HeaderComponent } from './admin/layout/main/header/header.component';
import { FooterComponent } from './admin/layout/main/footer/footer.component';
import { ContentComponent } from './admin/layout/main/content/content.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    AdminComponent,
    LayoutComponent,
    SidebarComponent,
    MenuItemComponent,
    LoadingSpinnerComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgApexchartsModule,
    NgScrollbarModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
