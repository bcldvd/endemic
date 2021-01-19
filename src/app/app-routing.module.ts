import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: 'order', loadChildren: () => import('./order/order.module').then((m) => m.OrderModule) },
  { path: 'order-cart', loadChildren: () => import('./order-cart/order-cart.module').then((m) => m.OrderCartModule) },
  { path: 'pay', loadChildren: () => import('./pay/pay.module').then((m) => m.PayModule) },
  { path: 'declare-sick', loadChildren: () => import('./declare-sick/declare-sick.module').then((m) => m.DeclareSickModule) },
  {
    path: 'declare-sick-confirmation',
    loadChildren: () =>
      import('./declare-sick-confirmation/declare-sick-confirmation.module').then((m) => m.DeclareSickConfirmationModule),
  },
  { path: 'open-api', loadChildren: () => import('./open-api/open-api-routing.module').then((m) => m.OpenApiRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
