import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.css'
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = new Customer();

  constructor(private customerService:CustomerService, 
              private router:Router) { }

  ngOnInit(): void {
  }

  saveCustomer(){
    this.customerService.createCustomer(this.customer).subscribe( data => {
      console.log(data);
      this.goToCustomerList();
    },
   error => console.log(error));
  }

  goToCustomerList(){
    this.router.navigate(['/customers']);
  }

  onSubmit(){
      console.log(this.customer);
      this.saveCustomer();
  }

}
