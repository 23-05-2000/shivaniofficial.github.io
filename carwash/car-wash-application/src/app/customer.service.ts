import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
private baseURL = "http://localhost:8080/customers/customers";
constructor(private httpClient : HttpClient) { }


public getCustomerList() {
  return this.httpClient.get<Customer[]>(`${this.baseURL}`);
}

getCustomerListDesc(): Observable<Customer[]>{
  return this.httpClient.get<Customer[]>(`${`http://localhost:8080/customers/customers/byDesc`}`);
}

createCustomer(customer: Customer): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,customer);
}

deleteCustomer(id: any): Observable<any> {
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
updateCustomer(custId: any,customer: Customer): Observable<any> {
  return this.httpClient.put(`${this.baseURL}/${custId}`,customer);
}

}
