import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';

import { SharedModule } from '@ffdc-corporate-banking-sample/ui/shared';
import { StatementModule } from '@ffdc-corporate-banking-sample/ui/cdk/statement';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
    InlineSVGModule.forRoot(),
    StatementModule,
  ],
})
export class HomeModule {}
