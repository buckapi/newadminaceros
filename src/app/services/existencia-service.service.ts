import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Yeoman } from './yeoman.service';

@Injectable({
  providedIn: 'root'
})
export class ExistenciaService {
  private baseUrl = '';

  constructor(private http: HttpClient,
    public yeoman:Yeoman) { }

  getAllExistencias(familia: any): Observable<any> {
    const url = `${this.baseUrl}`;
   this.yeoman.existencias=this.http.get<any>(url);
    return this.http.get<any>(url);
  }
}
