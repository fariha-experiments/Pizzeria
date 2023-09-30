import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BuildservService {

  constructor(private http: HttpClient) { }

  getIngredients() {
    return this.http.get('http://localhost:4000/getss');
  }

}


