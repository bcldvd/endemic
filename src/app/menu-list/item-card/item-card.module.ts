import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './item-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [ItemCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatRippleModule
  ],
  exports: [ItemCardComponent]
})
export class ItemCardModule { }
