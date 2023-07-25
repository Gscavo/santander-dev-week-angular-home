import { Injectable } from '@angular/core';
import { enviroment } from '../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private apiUrl = enviroment.API_URL;

  constructor(private http: HttpClient) { }

  getAccount(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
