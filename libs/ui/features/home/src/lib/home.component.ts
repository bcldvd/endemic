import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentPage = 0;
  maxPage = 0;

  constructor() {}

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {}

  previousPage() {
    this.currentPage--;
    this.getAccounts();
  }

  nextPage() {
    this.currentPage++;
    this.getAccounts();
  }
}
