import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppsService {

  constructor(private http: HttpClient) { }

  sendCart(){
    return this.http.get('http://localhost:4000/cart');
  }

}
