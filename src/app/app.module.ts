import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { TemplateComponent } from './admin/template/template.component';
import { SidebarComponent } from './admin/template/sidebar/sidebar.component';
import { MenuItemComponent } from './admin/template/sidebar/menu-item/menu-item.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { MainComponent } from './admin/template/main/main.component';
import { HeaderComponent } from './admin/template/main/header/header.component';
import { FooterComponent } from './admin/template/main/footer/footer.component';
import { ContentComponent } from './admin/template/main/content/content.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    AdminComponent,
    TemplateComponent,
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
