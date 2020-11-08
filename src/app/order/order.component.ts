import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { Tenant } from './tenant.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  tenant$: Observable<Tenant>;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const queryParams$ = this.route.queryParams;
    this.tenant$ = queryParams$.pipe(
      filter((params) => params.tenantId),
      map((params) => params.tenantId),
      switchMap((tenantId) => this.getTenantInfo(tenantId))
    );
    this.tenant$.subscribe((tenant) => {
      this.setLogo(tenant);
    });
  }

  private setLogo(tenant: Tenant) {
    this.setCssVar('logo', `url(${tenant.logoUrl})`);
  }

  private setCssVar(
    property: string,
    value: string,
    element: HTMLElement = document.body
  ) {
    element.style.setProperty(`--${property}`, value);
  }

  getTenantInfo(tenantId: string) {
    return this.api.get<Tenant>(`/tenant?tenantId=${tenantId}`);
  }
}
