import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';

import { BuildpizzaComponent } from './buildpizza/buildpizza.component';
import { CartComponent } from './cart/cart.component';


export const APPS: Routes = [
{path: 'home', component: HomeComponent},
{path: 'order', component: OrderComponent},
{path: 'build', component: BuildpizzaComponent},
{path: 'cart', component: CartComponent},
{path: 'cart/:value', component: CartComponent}
];

export const routing = RouterModule.forRoot(APPS);
