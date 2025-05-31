import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  // private apiUrl = 'http://localhost:3000/api/multimedias';
  private apiUrl = 'https://appcrudmoviles.onrender.com/api/multimedias';

  constructor(private http: HttpClient) {}

  getMultimedias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createMultimedia(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateMultimedia(data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${data._id}`, data);
  }

  deleteMultimedia(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
