import { Component } from '@angular/core';
import { HttpClient ,HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from "rxjs";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  
  ngOnInit() {
}
}
