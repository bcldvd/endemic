import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenApiRoutingModule } from './open-api-routing.module';
import { OpenApiComponent } from './open-api.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [OpenApiComponent],
  imports: [CommonModule, OpenApiRoutingModule, MatButtonModule],
})
export class OpenApiModule { }
