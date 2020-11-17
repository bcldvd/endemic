import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'src/app/order/tenant.interface';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  @Input() menuItem: MenuItem;
  @Output() selectItem: EventEmitter<MenuItem> = new EventEmitter();
}
