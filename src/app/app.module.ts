import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';

import { routing } from './app.routing';
import { GetPizzaService } from './getpizza.service';
import { BuildservService } from './buildserv.service';
import { BuildpizzaComponent } from './buildpizza/buildpizza.component';
import { AppsService } from './apps.service';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,

    BuildpizzaComponent,
    CartComponent
  ],
  imports: [
    BrowserModule, routing, HttpClientModule
  ],
  providers: [GetPizzaService, BuildservService, AppsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
