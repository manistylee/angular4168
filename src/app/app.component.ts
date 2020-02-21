import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular4168';
  constructor(public userservice:UsersService){}

  ngOnInit(){
      console.log(this.userservice.url);
      this.userservice.getUsers().subscribe(response => { 
        //console.log(response);
      });

      //console.log(this.userservice.UsersData);
  }

  

}
