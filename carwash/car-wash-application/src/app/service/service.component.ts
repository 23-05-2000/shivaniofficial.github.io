// src/app/car-wash/service.component.ts

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Service } from '../service';

@Component({
  selector: 'app-car-wash',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class serviceComponent  {
  constructor(private serviceService: ServiceService){}
  services!: Service[];

  //ngOnInit it will call on page loads
  ngOnInit(){
    this.services = this.serviceService.getServices();
  }

  /*service: any[] | undefined; // Replace 'any' with the actual type of your car wash services

  constructor(private Service: any) {}

  ngOnInit(): void {
    this.loadServices();
  }
  loadServices() {
    throw new Error('Method not implemented.');
  }

  loadService(): void {
    this.service = this.Service.getServices();
  }*/
}
