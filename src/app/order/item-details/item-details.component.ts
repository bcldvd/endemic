import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuItem } from '../tenant.interface';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ItemDetailsComponent>, @Inject(MAT_DIALOG_DATA) public menuItem: MenuItem) {}

  ngOnInit(): void {
    this.menuItem.quantity = 1;
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
