import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'endemic';
  date$ = this.getDate();

  constructor(private http: HttpClient) {}

  getDate() {
    return this.http.get('/api/date').pipe(map((res: any) => res.date));
  }
}
