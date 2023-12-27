import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  cars: any;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  public getCars(){
    this.carService.getCarList().subscribe((data: any) => {
      this.cars = data;
    });
  }

  public getCarsByDesc(){
    this.carService.getCarListDesc().subscribe((data: any) => {
      this.cars = data;
    });
  }

  deleteCar(carId: any){
    this.carService.deleteCar(carId).subscribe( data => {
      console.log(data);
      this.getCars();
    })
}
updateCar(carId: any){
  this.carService.updateCar(carId,this.cars).subscribe( data => {
    console.log(data);
    this.getCars();
  });}

}