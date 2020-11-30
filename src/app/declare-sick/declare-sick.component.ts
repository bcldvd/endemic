import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { DeclareRiskDialog } from './declare-sick-dialog.component';

@Component({
  selector: 'app-declare-sick',
  templateUrl: './declare-sick.component.html',
  styleUrls: ['./declare-sick.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'app-declare-sick',
  },
})
export class DeclareSickComponent implements OnInit {
  checked: boolean;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(private dialog: MatDialog, private apiService: ApiService) {}

  ngOnInit(): void {}
  declareYourself() {
    this.apiService
      .post('/declare-sick', {
        email: this.emailFormControl.value,
        date: Date.now(),
      })
      .subscribe((data) => {
        this.dialog.open(DeclareRiskDialog);
      });
  }
}
