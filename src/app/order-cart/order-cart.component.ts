import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuItem } from '../order/tenant.interface';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.scss'],
})
export class OrderCartComponent implements OnInit {

  state$: Observable<object>;
  tenantId: string;
  orderCart: MenuItem[];

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))

    this.state$.subscribe(val => {
      this.tenantId = val["tenantId"];
      this.orderCart = val["cart"];
    })
  }

  selectItem(val: any) {
    const index: number = this.orderCart.indexOf(val);
    if (index !== -1) {
      this.orderCart.splice(index, 1);
    }
  }
}
