import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './Components/login/index-page/index-page.component';
import { AdminLoginComponent } from './Components/login/admin-login/admin-login.component';
import { SalesRepresentativeLoginComponent } from './Components/login/sales-representative-login/sales-representative-login.component';
import { NavbarComponent } from './Components/login/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    AdminLoginComponent,
    SalesRepresentativeLoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
