import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaHeroeService {
  // private apiUrl = 'http://localhost:3000/api/multimediasheroe';
  private apiUrl = 'https://appcrudmoviles.onrender.com/api/multimediasheroe';

  constructor(private http: HttpClient) {}

  getImagenesPorHeroe(heroeId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/heroe/${heroeId}`);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
