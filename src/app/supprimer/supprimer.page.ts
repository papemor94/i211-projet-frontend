import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = "http://127.0.0.1:8091/android/utilisateurs";


@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.page.html',
  styleUrls: ['./supprimer.page.scss'],
})
export class SupprimerPage implements OnInit {

  user :any = [] ; 

  constructor(private _httpClient : HttpClient) { }

  ngOnInit() {

  };
  
    removeUsers(user) {}
      
    delete(id): Observable<any>{
      return this._httpClient.delete(baseUrl);
    }
   deleteAll(): Observable<any>{
     return

   }


} 



