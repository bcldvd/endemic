import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { Cart, MenuItem, Tenant } from '../order/tenant.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class TenantService {
  public tenant$ = new BehaviorSubject<Tenant>(null);
  tenantId: string;

  constructor(private api: ApiService, private route: ActivatedRoute) {
    const queryParams$ = this.route.queryParams;
    const tenant$ = queryParams$.pipe(
      filter((params) => params.tenantId),
      map((params) => params.tenantId),
      filter((tenantId) => tenantId !== this.tenantId),
      switchMap((tenantId) => this.getInfo(tenantId)),
    );
    tenant$.subscribe((tenant) => {
      this.setLogo(tenant);
      this.tenant$.next(tenant);
    });
  }

  setLogo(tenant: Tenant) {
    this.setCssVar('logo', `url(${tenant.logoUrl})`);
  }

  private setCssVar(property: string, value: string, element: HTMLElement = document.body) {
    element.style.setProperty(`--${property}`, value);
  }

  getInfo(tenantId: string) {
    this.tenantId = tenantId;
    return this.api.get<Tenant>(`/tenant/${tenantId}`);
  }
}
