import { Component } from '@angular/core';
import { Car } from '../car';
import { Router } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrl: './create-car.component.css'
})
export class CreateCarComponent {
  car: Car = new Car();

  constructor(private carService:CarService, 
              private router:Router) { }

  ngOnInit(): void {
  }

    saveCar(){
      this.carService.createCar(this.car).subscribe( (data: any) => {
        console.log(data);
        this.goToCarList();
      },
        (     error: any) => console.log(error));
    }

    goToCarList(){
      this.router.navigate(['/cars']);
    }

    onSubmit(){
        console.log(this.car);
        this.saveCar();
    }

}
