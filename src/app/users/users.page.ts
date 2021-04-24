
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {


  users :any = [] ; 

  constructor(private _httpClient : HttpClient) { }

  ngOnInit() {

    this._httpClient.get<any>("http://127.0.0.1:8091/android/utilisateurs").subscribe(data=> {
        //...
        console.log("data" , data) ; 
        this.users = data ; 
});
    console.log(this.users) ; 
  }

}
