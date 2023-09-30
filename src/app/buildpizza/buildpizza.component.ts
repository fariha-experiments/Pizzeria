import { Component, OnInit } from '@angular/core';
import { BuildservService } from '../buildserv.service';

@Component({
  selector: 'app-buildpizza',
  templateUrl: './buildpizza.component.html',
  styleUrls: ['./buildpizza.component.css']
})
export class BuildpizzaComponent implements OnInit {

  toppings;
  // tslint:disable-next-line:no-inferrable-types
  value:number = 0;

  constructor(private builds: BuildservService) {

  }

  ngOnInit() {
    this.builds.getIngredients().subscribe((response) => {this.toppings = response; });
  }

  change(price, event) {
    console.log(price);
    if (event.target.checked) {
      this.value = this.value + price; }
    else {
      this.value = this.value - price; }
  }

  sendValue(){
    return this.value;
  }

}
