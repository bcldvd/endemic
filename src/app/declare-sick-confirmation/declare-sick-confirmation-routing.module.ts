import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclareSickConfirmationComponent } from './declare-sick-confirmation.component';

const routes: Routes = [{ path: '', component: DeclareSickConfirmationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeclareSickConfirmationRoutingModule { }
