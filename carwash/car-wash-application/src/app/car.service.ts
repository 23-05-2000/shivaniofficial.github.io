import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseURL = "http://localhost:8080/cars/cars";
  
  constructor(private httpClient : HttpClient) { }

  getCarList(): Observable<Car[]>{
    return this.httpClient.get<Car[]>(`${this.baseURL}`);
  }

  getCarListDesc(): Observable<Car[]>{
    return this.httpClient.get<Car[]>(`${`http://localhost:8080/cars/cars/byDesc`}`);
  }

  createCar(car: Car): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,car);
  }

  getCarById(carId: number): Observable<Car>{
      return this.httpClient.get<Car>(`${this.baseURL}/${carId}`);
  }
  
  deleteCar(carId: any): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${carId}`);
  }
  updateCar(carId: any,car: Car): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${carId}`,car);
  }
  

}
