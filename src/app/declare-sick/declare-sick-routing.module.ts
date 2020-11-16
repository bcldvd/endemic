import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclareSickComponent } from './declare-sick.component';

const routes: Routes = [{ path: '', component: DeclareSickComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeclareSickRoutingModule { }
