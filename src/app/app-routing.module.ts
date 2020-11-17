import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
  { path: 'order-cart', loadChildren: () => import('./order-cart/order-cart.module').then(m => m.OrderCartModule) },
  { path: 'pay', loadChildren: () => import('./pay/pay.module').then(m => m.PayModule) },
  { path: 'declare-sick', loadChildren: () => import('./declare-sick/declare-sick.module').then(m => m.DeclareSickModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
