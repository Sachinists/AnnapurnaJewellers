import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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
      this.router.navigateByUrl('adminDashboard');
    }else{
      this.incorrect = true;
    }
    this.loginForm.reset();
  }
}
