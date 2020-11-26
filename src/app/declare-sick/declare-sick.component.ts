import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-declare-sick',
  templateUrl: './declare-sick.component.html',
  styleUrls: ['./declare-sick.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-declare-sick',
  },
})
export class DeclareSickComponent implements OnInit {
  checked: boolean;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor() {}

  ngOnInit(): void {}
}
