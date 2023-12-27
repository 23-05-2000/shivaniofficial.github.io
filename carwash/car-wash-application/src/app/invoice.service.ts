import { Injectable } from '@angular/core';
import { Invoice } from './invoice';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private baseURL = "http://localhost:8080/invoice/invoices";
  constructor(private httpClient : HttpClient) { }
  
  
  public getInvoiceList() {
    return this.httpClient.get<Invoice[]>(`${this.baseURL}`);
  }
  
  getInvoiceListDesc(): Observable<Invoice[]>{
    return this.httpClient.get<Invoice[]>(`${`http://localhost:8080/invoice/invoices/byDesc`}`);
  }
  
  createInvoice(invoice: Invoice): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,invoice);
  }
  
  deleteInvoice(id: any): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  updateInvoice(invoiceId: any,invoice: Invoice ): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${invoiceId}`,invoice);
  }

}
