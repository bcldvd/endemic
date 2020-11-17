import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list.component';
import { ItemCardModule } from './item-card/item-card.module';

@NgModule({
  declarations: [MenuListComponent],
  imports: [CommonModule, ItemCardModule],
  exports: [MenuListComponent]
})
export class MenuListModule { }
