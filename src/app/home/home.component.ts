import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  date$ = this.getDate();

  constructor(private api: ApiService) {}

  getDate() {
    return this.api.get('/date').pipe(map((res: any) => res.date));
  }
}
