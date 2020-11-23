import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'https://localhost:4200'; // '/api';

  constructor(private http: HttpClient) {}

  get<T>(url: string) {
    return this.http.get<T>(`${this.url}${url}`, { headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  post<T>(url: string, body: any) {
    return this.http.post<T>(`${this.url}${url}`, body);
  }

  put<T>(url: string, body: any) {
    return this.http.put<T>(`${this.url}${url}`, body);
  }

  delete<T>(url: string) {
    return this.http.delete<T>(`${this.url}${url}`);
  }
}
