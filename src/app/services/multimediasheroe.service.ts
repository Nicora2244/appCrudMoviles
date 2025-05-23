import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaHeroeService {
  private apiUrl = 'http://localhost:3000/api/multimediasheroes';

  constructor(private http: HttpClient) {}

  getImagenesPorHeroe(heroeId: string): Observable<any[]> {
    return this.http.get<any[]>(${this.apiUrl}?heroeId=${heroeId});
  }

  asociarImagen(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}   