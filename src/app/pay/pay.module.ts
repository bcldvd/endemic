import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';

import { PayRoutingModule } from './pay-routing.module';
import { PayComponent } from './pay.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@NgModule({
  declarations: [PayComponent, AddCustomerComponent],
  imports: [
    CommonModule,
    PayRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class PayModule { }
