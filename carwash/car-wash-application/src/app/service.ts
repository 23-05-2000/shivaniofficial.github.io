export class Service {
    serviceId : number;
    name : string;
    price : number;
   
    constructor(serviceId: number , name:string, price:number){
       this.serviceId = serviceId;
       this.name = name;
       this.price = price;
    }
   }