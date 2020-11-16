import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeclareSickRoutingModule } from './declare-sick-routing.module';
import { DeclareSickComponent } from './declare-sick.component';


@NgModule({
  declarations: [DeclareSickComponent],
  imports: [
    CommonModule,
    DeclareSickRoutingModule
  ]
})
export class DeclareSickModule { }
