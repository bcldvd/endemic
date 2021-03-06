import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeclareSickRoutingModule } from './declare-sick-routing.module';
import { DeclareSickComponent } from './declare-sick.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DeclareRiskDialog } from './declare-sick-dialog.component';
@NgModule({
  declarations: [DeclareSickComponent, DeclareRiskDialog],
  imports: [
    CommonModule,
    DeclareSickRoutingModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
})
export class DeclareSickModule {}
