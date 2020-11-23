import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Menu, MenuItem } from '../order/tenant.interface';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  @Input() menu: Menu;
  @Output() selectItem: EventEmitter<MenuItem> = new EventEmitter();

  ngOnInit(): void {}
}
