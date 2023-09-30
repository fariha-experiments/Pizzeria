import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetPizzaService {
  resp: any;

  constructor(private http: HttpClient) { }

  getPizza() {
    return this.http.get('http://localhost:4000/gets');
  }

  addToCart(names: any, prices: any, types: any) {
      const body = {name: names, price: prices, type: types};
      console.log(body);
      this.http.post('http://localhost:4000/posts', body).subscribe((response) => {this.resp = (response); });
  }

  sendCart(){
    console.log(this.resp);
    return this.resp;
    }

}
