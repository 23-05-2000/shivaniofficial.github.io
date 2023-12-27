import { Component } from '@angular/core';
import { AppoinmentService } from '../appoinment.service';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrl: './appoinment-list.component.css'
})
export class AppoinmentListComponent {
  appoinments: any;

  constructor(private appoinmentService: AppoinmentService) { }

  ngOnInit(): void {
    this.getAppoinments();
  }

  public getAppoinments(){
    this.appoinmentService.getAppoinmentList().subscribe((data: any) => {
      this.appoinments = data;
    });
  }

  public createAppoinments(){
    this.appoinmentService.createAppoinment(this.appoinments).subscribe((data: any) => {
      this.appoinments = data;
    });
  }


  public getAppoinmentsByDesc(){
    this.appoinmentService.getAppoinmentListDesc().subscribe((data: any) => {
      this.appoinments = data;
    });
  }

  deleteAppoinment(appointmentId: any){
    this.appoinmentService.deleteAppoinment(appointmentId).subscribe( data => {
      console.log(data);
      this.getAppoinments();
    });}

    updateAppoinment(appointmentId: any){
      this.appoinmentService.updateAppoinment(appointmentId,this.appoinments).subscribe( data => {
        console.log(data);
        this.getAppoinments();
      });}


}