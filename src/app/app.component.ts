import { AppsService } from './apps.service';
import { Component, OnInit } from '@angular/core';
import { GetPizzaService } from './getpizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  cart: any;
  mycart:any;


  constructor(private getCarts: AppsService) {
    this.getCarts.sendCart().subscribe((response) => {this.cart = response; });
  }

  getCart(){

   const names: any = this.cart.map((item)=>{item.name;});
   console.log(names);
    alert(names);
  }


ngOnInit() {
}

}
