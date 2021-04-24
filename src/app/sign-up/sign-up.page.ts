import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  user:any = {};

  constructor(private http: HttpClient) { 
    this.user.firstname  = '' ; 
    this.user.lastname = '' ; 
    this.user.login = '' ; 
    this.user.password =''; 
  }

  ngOnInit() {
  }

  addUser() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
   // const requestOptions = new RequestOptions({ headers: headers });

    let postData = {
            "firstname": "Customer004",
            "lastname": "customer004@email.com",
            "login": "0000252525",
            "password": "Fjingu558"
    }

    this.http.post("http://localhost:8091/android/utilisateurs", postData)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }
  submit() {

  console.log(this.user) ; 
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
   // const requestOptions = new RequestOptions({ headers: headers });

    this.http.post("http://localhost:8091/android/utilisateurs", this.user)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

}
