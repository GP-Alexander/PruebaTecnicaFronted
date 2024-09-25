import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpresasServiceService {
  private apiUrl = 'http://localhost:4000/api/empresas';
  constructor(private http: HttpClient) {}
    getEmpresas(): Observable<any> {
    return this.http.get(this.apiUrl);


   }
}

