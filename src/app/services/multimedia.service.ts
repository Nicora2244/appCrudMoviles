import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  private apiUrl = 'http://localhost:3000/api/multimedias';

  constructor(private http: HttpClient) {}

  getMultimedias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}