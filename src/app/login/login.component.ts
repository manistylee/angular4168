import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = false;
  
  constructor(public route:Router) { }

  ngOnInit() {
  }


  onLogin(form:NgForm){
    if(form.invalid){
      return;
    }
    console.log(form.value);
    if(form.value.username == "demo" && form.value.password == "demo"){
      this.login = true;
    }
    form.resetForm();
    
  }

  onLogout(){
    this.login = false;
    console.log(this.login);
  }

}
