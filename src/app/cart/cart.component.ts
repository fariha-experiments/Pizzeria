import { AppsService } from './../apps.service';
import { Component, OnInit } from '@angular/core';
import { BuildpizzaComponent } from '../buildpizza/buildpizza.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart: any;
res= 0 ;
val1: any;
// tslint:disable-next-line:no-inferrable-types
total: number = 0;
subscribe: any;
mmmm: any;
  constructor(private getcart: AppsService, private active: ActivatedRoute) {
    this.mmmm = localStorage.getItem('totalPrice');
  }

  ngOnInit() {
    this.getcart.sendCart().subscribe((response) => {this.cart = response; for (let i = 0; i < this.cart.length; i++) {
      this.res += +this.cart[i].price;

    } });

    this.subscribe = this.active.params.subscribe((response) => {this.val1 = response['value']; });
console.log(this.subscribe);

this.total += +this.val1;



  }










}
