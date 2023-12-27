import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'car-wash-application';
/*
  constructor(private router:Router){}
  //user-defined method to navigate from one component to another
  getAbout(){
    this.router.navigate(['/about']);
  }

  getAppoinment()
  {
    this.router.navigate(['/appoinment-list']);
  }
  getCar()
  {
    this.router.navigate(['/car-list']);
  }
  getCustomer()
  {
    this.router.navigate(['/customer-list']);
  }
  getInvoice()
  {
    this.router.navigate(['/invoice-list']);
  }
  getLogin()
  {
    this.router.navigate(['/login']);
  }
  */
}
