import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent implements OnInit{
  invoices: any;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.getInvoices();
  }

  public getInvoices(){
    this.invoiceService.getInvoiceList().subscribe((data: any) => {
      this.invoices = data;
    });
  }

  public getInvoicesByDesc(){
    this.invoiceService.getInvoiceListDesc().subscribe((data: any) => {
      this.invoices = data;
    });
  }

  deleteInvoice(id: any){
    this.invoiceService.deleteInvoice(id).subscribe( data => {
      console.log(data);
      this.getInvoices();
    })
}
updateInvoice(invoiceId: any){
  this.invoiceService.updateInvoice(invoiceId,this.invoices).subscribe( data => {
    console.log(data);
    this.getInvoices();
  });}
}