import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrupoMultimediaService {
  // private apiUrl = 'http://localhost:3000/api/grupomultimedias';
  private apiUrl = 'https://appcrudmoviles.onrender.com/api/grupomultimedias';

  constructor(private http: HttpClient) {}

  getGrupos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createGrupo(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateGrupo(data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${data._id}`, data);
  }

  deleteGrupo(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
