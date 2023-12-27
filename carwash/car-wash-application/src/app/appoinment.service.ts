import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appoinment } from './appoinment';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {

  private baseURL = "http://localhost:8080/appoinment/appoinments";
  constructor(private httpClient : HttpClient) { }
  
  
  public getAppoinmentList() {
    return this.httpClient.get<AppoinmentService[]>(`http://localhost:8080/appoinment/appoinments`);
  }
  
  getAppoinmentListDesc(): Observable<AppoinmentService[]>{
    return this.httpClient.get<AppoinmentService[]>(`${`http://localhost:8080/appoinment/appoinments/byDesc`}`);
  }
  
  createAppoinment(appoinment: Appoinment): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,appoinment);
  }
  
  deleteAppoinment(appointmentId: any): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${appointmentId}`);
  }

  updateAppoinment(appointmentId: any,appoinment: Appoinment ): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${appointmentId}`,appoinment);
  }


}
