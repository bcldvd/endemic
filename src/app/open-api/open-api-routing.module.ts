import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenApiComponent } from './open-api.component';

const routes: Routes = [{ path: '', component: OpenApiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenApiRoutingModule { }
