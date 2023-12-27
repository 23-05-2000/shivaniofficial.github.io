import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from '../appoinment.service';
import { Router } from '@angular/router';
import { Appoinment } from '../appoinment';

@Component({
  selector: 'app-create-appoinment',
  templateUrl: './create-appoinment.component.html',
  styleUrl: './create-appoinment.component.css'
})
export class CreateAppoinmentComponent implements OnInit{
  appoinment: Appoinment = new Appoinment();

  constructor(private appoinmentService:AppoinmentService, 
              private router:Router) { }

  ngOnInit(): void {
   // this.saveAppoinment();
  }

  saveAppoinment(){
    this.appoinmentService.createAppoinment(this.appoinment).subscribe( data => {
      console.log(data);
      this.goToAppoinmentList();
    },
   error => console.log(error));
  }

  goToAppoinmentList(){
    this.router.navigate(['/appoinments']);
  }

  onSubmit(){
      console.log(this.appoinment);
      this.saveAppoinment();
  }

}