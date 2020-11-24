import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { MenuListModule } from '../menu-list/menu-list.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { OrderComponent } from './order.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

@NgModule({
  declarations: [OrderComponent, ItemDetailsComponent],
  imports: [CommonModule, OrderRoutingModule, MenuListModule, MatButtonModule, MatIconModule, MatDialogModule],
})
export class OrderModule {}
