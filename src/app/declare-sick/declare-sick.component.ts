import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  constructor(private dialog: MatDialog, private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}
  declareYourself() {
    this.apiService
      .post('/declare-sick-confirmation', {
        email: this.emailFormControl.value,
        date: Date.now(),
      })
      .subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('/declare-sick-confirmation');
      });
  }
}
