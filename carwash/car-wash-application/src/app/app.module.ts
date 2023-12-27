import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppoinmentListComponent } from './appoinment-list/appoinment-list.component';
import { CarListComponent } from './car-list/car-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppoinmentService } from './appoinment.service';
import { serviceComponent } from './service/service.component';
import { AuthService } from './auth.service';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { AboutComponent } from './about/about.component';
import { CreateAppoinmentComponent } from './create-appoinment/create-appoinment.component';
import { CustomerService } from './customer.service';
import { CarService } from './car.service';
import { InvoiceService } from './invoice.service';
import { ServiceService } from './service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppoinmentListComponent,
    CarListComponent,
    CustomerListComponent,
    InvoiceListComponent,
    serviceComponent, 
    CreateCustomerComponent, CreateCarComponent, AboutComponent, CreateAppoinmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppoinmentService,AuthService,CustomerService,CarService,InvoiceService,ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
