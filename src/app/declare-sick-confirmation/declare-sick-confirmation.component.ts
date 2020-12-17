import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-declare-sick',
  templateUrl: './declare-sick-confirmation.component.html',
  styleUrls: ['./declare-sick-confirmation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'app-declare-sick',
  },
})
export class DeclareSickConfirmationComponent implements OnInit {
  emailParam: string;
  constructor(private dialog: MatDialog, private apiService: ApiService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.emailParam = params.email;
      this.apiService.post('/declare-sick-confirmation', {
        email: this.emailParam,
        date: Date.now(),
      });
    });
  }

  ngOnInit(): void {}
  back() {}
}
