import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
  customers: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  public getCustomers(){
    this.customerService.getCustomerList().subscribe((data: any) => {
      this.customers = data;
    });
  }

  public getCustomersByDesc(){
    this.customerService.getCustomerListDesc().subscribe((data: any) => {
      this.customers = data;
    });
  }

  deleteCustomer(id: any){
    this.customerService.deleteCustomer(id).subscribe( data => {
      console.log(data);
      this.getCustomers();
    })
}
updateCustomer(custId: any){
  this.customerService.updateCustomer(custId,this.customers).subscribe( data => {
    console.log(data);
    this.getCustomers();
  });}
}
