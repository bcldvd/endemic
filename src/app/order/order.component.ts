import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { MenuItem, Tenant } from './tenant.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  tenant$: Observable<Tenant>;
  //TODO: implem strategy to keep order on refresh
  orderCart: MenuItem[] = [];
  orderCartTotalPrice: number = 0;
  tenantId: string;
  state$: Observable<object>;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    this.iconRegistry.addSvgIcon('plate', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/plate.svg'));
  }

  ngOnInit(): void {
    const queryParams$ = this.route.queryParams;
    this.tenant$ = queryParams$.pipe(
      filter((params) => params.tenantId),
      map((params) => params.tenantId),
      switchMap((tenantId) => this.getTenantInfo(tenantId)),
    );
    this.tenant$.subscribe((tenant) => {
      this.setLogo(tenant);
    });
    this.route.paramMap.pipe(map(() => window.history.state)).subscribe((val) => {
      if (val['cart'] && val['cart'].lenght > 0) {
        this.orderCart = val['cart'];
        this.orderCartTotalPrice = this.orderCart
          .map((a) => a.price)
          .reduce(function (a, b) {
            return a + b;
          });
      }
    });
  }

  private setLogo(tenant: Tenant) {
    this.setCssVar('logo', `url(${tenant.logoUrl})`);
  }

  private setCssVar(property: string, value: string, element: HTMLElement = document.body) {
    element.style.setProperty(`--${property}`, value);
  }

  getTenantInfo(tenantId: string) {
    this.tenantId = tenantId;
    return this.api.get<Tenant>(`/tenant/${tenantId}`);
  }

  addItem(menuItem: MenuItem) {
    this.orderCart.push(menuItem);
    this.orderCartTotalPrice = this.orderCartTotalPrice + menuItem.price;
  }
}
