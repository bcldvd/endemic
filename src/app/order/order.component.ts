import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { TenantService } from '../services/tenant.service';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { MenuItem, Tenant } from './tenant.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  tenant$: Observable<Tenant>;
  orderCart: MenuItem[] = [];
  orderCartTotalPrice = 0;

  constructor(private dialog: MatDialog, private cartService: CartService, public tenantService: TenantService) {}

  ngOnInit(): void {
    this.refreshCart();
    this.tenantService.tenant$.subscribe((data) => {
      console.log(data);
    });
  }

  addItem(menuItem: MenuItem) {
    this.cartService.addItem(menuItem);
    this.refreshCart();
  }

  refreshCart() {
    this.orderCart = this.cartService.get();
    this.orderCartTotalPrice = this.cartService.calculateTotal(this.orderCart);
  }

  openDialog(menuItem: MenuItem) {
    const dialogRef = this.dialog.open(ItemDetailsComponent, {
      data: menuItem,
      width: '100vw',
      maxWidth: '100vw',
      position: {
        bottom: '0',
      },
    });

    dialogRef
      .afterClosed()
      .pipe(filter((result) => result))
      .subscribe((result: MenuItem) => {
        this.addItem(result);
      });
  }
}
