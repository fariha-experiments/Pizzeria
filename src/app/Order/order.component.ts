import { Component, OnInit } from '@angular/core';
import { GetPizzaService } from '../getpizza.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  result;
  carts;

  constructor(private getPiz: GetPizzaService) {

   }

  ngOnInit() {
    this.getPiz.getPizza().subscribe((response) => {this.result = (response); });
  }

  cart(name: any, price: any, type: any) {
      this.getPiz.addToCart(name, price, type);
      alert('added successfully');

  }

}
