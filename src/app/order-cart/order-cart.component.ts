import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { MenuItem, Tenant } from '../order/tenant.interface';
import { CartService } from '../services/cart.service';
import { TenantService } from '../services/tenant.service';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.scss'],
})
export class OrderCartComponent implements OnInit {
  tenant$: Observable<Tenant>;
  tenantId: string;
  orderCart: MenuItem[];
  orderCartTotalPrice = 0;

  constructor(private cartService: CartService, public tenantService: TenantService) {}

  ngOnInit(): void {
    this.refreshCart();
  }

  refreshCart() {
    this.orderCart = this.cartService.get();
    this.orderCartTotalPrice = this.cartService.calculateTotal(this.orderCart);
  }

  selectItem(val: any) {
    const index: number = this.orderCart.indexOf(val);
    if (index !== -1) {
      this.orderCart.splice(index, 1);
    }
  }
}
