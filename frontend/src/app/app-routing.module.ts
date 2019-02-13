import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './Components/login/index-page/index-page.component';
import { AdminLoginComponent } from './Components/login/admin-login/admin-login.component';
import { SalesRepresentativeLoginComponent } from './Components/login/sales-representative-login/sales-representative-login.component';
import { SalesDashboardComponent } from './Components/posModule/sales-dashboard/sales-dashboard.component';
import { AdminDashboardComponent } from './Components/adminModule/admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  { 
    path: '', 
    component: IndexPageComponent,
    children:[
      {
        path: 'adminLogin', 
        component: AdminLoginComponent
      },
      {
        path: 'salesRepLogin', 
        component: SalesRepresentativeLoginComponent
      }
    ]
  },
  {
    path: 'salesDashboard', 
    component: SalesDashboardComponent
  },
  {
    path: 'adminDashboard', 
    component: AdminDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
