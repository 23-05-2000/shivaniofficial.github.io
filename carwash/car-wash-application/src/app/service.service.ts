import { Injectable } from '@angular/core';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  public getServices(){
    let services:Service[];
    services = [
      new Service(1,'Normal Wash',10000),
      new Service(2,'Interial Wash',15000),
      new Service(3,'Water Wash',8000),
      new Service(4,'Dry&BodyWash',20000),
      new Service(5,'Body Wash',5000)
    ];
    return services;
  }

}
