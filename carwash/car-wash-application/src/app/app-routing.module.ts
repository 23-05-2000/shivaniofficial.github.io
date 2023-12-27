import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { AppoinmentListComponent } from './appoinment-list/appoinment-list.component';
import { serviceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { CreateAppoinmentComponent } from './create-appoinment/create-appoinment.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', redirectTo: '/appoinments', pathMatch: 'full' },
  { path: 'appoinments', component: AppoinmentListComponent },
  { path: 'cars', component: CarListComponent },
  { path: 'create-appoinment', component: CreateAppoinmentComponent },
  { path: 'create-customer', component: CreateCustomerComponent },
  { path: 'create-car', component: CreateCarComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent},
  { path: 'invoices', component: InvoiceListComponent },
  { path: 'services', component: serviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
