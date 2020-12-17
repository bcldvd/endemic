import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeclareSickConfirmationRoutingModule } from './declare-sick-confirmation-routing.module';
import { DeclareSickConfirmationComponent } from './declare-sick-confirmation.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [DeclareSickConfirmationComponent],
  imports: [
    CommonModule,
    DeclareSickConfirmationRoutingModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
})
export class DeclareSickConfirmationModule {}
