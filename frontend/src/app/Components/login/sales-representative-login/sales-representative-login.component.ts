import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sales-representative-login',
  templateUrl: './sales-representative-login.component.html',
  styleUrls: ['./sales-representative-login.component.css']
})
export class SalesRepresentativeLoginComponent implements OnInit {
  incorrect : boolean = false;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  onSubmit(){
    console.log(this.loginForm.value.username+this.loginForm.value.password);
    if(this.loginForm.value.username == "dev" && this.loginForm.value.password == "dev"){
      this.router.navigateByUrl('salesDashboard');
    }else{
      this.incorrect = true;
    }
    this.loginForm.reset();
  }
}
