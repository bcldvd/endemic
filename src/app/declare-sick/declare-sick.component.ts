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
  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {}
  declareYourself() {
    this.apiService
      .post('/covid-19-cases', {
        email: this.emailFormControl.value,
        date: Date.now(),
      })
      .subscribe((data) => {
        console.log(data);
      });

    this.dialog.open(DeclareRiskDialog);
  }
}
