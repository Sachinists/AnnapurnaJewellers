import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './Components/login/index-page/index-page.component';
import { AdminLoginComponent } from './Components/login/admin-login/admin-login.component';
import { SalesRepresentativeLoginComponent } from './Components/login/sales-representative-login/sales-representative-login.component';
import { NavbarComponent } from './Components/login/navbar/navbar.component';

import { ModalModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';

import { FooterComponent } from './Components/login/footer/footer.component';

import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SalesDashboardComponent } from './Components/posModule/sales-dashboard/sales-dashboard.component';
import { AdminDashboardComponent } from './Components/adminModule/admin-dashboard/admin-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    AdminLoginComponent,
    SalesRepresentativeLoginComponent,
    NavbarComponent,
    FooterComponent,
    SalesDashboardComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule,ModalModule.forRoot(),AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
