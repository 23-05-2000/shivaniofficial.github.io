import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  /*username!: string;
  password!: string;
  formData!: FormGroup;
  
  constructor(private router:Router) {}
  ngOnInit() { 
    this.formData = new FormGroup({
      userName: new FormControl("admin"),
      password: new FormControl("password")
    });
  }
OnClickSubmit() {
  if  this.router.navigate(['/customerlist']);
}
*/
}
