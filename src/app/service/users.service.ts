import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class UsersService {

  url = "https://jsonplaceholder.typicode.com/users";
  UsersData = [
    {id: 1560608769632, name: 'Artificial Intelligence'},
    {id: 1560608796014, name: 'Machine Learning'},
    {id: 1560608787815, name: 'Robotic Process Automation'},
    {id: 1560608805101, name: 'Blockchain'}
  ];
  constructor(public http:HttpClient) { }

  getUsers():Observable<any>
  {
    return this.http.get(this.url);
  }

  
}
