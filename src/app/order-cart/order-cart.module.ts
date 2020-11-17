import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderCartRoutingModule } from './order-cart-routing.module';
import { OrderCartComponent } from './order-cart.component';
import { MatButtonModule } from '@angular/material/button';
import { MenuListModule } from '../menu-list/menu-list.module';

@NgModule({
  declarations: [OrderCartComponent],
  imports: [
    CommonModule,
    OrderCartRoutingModule,
    MatButtonModule,
    MenuListModule,
  ]
})
export class OrderCartModule { }
