import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpresasServiceService {
  private apiUrl = 'http://localhost:4000/api/';
  constructor(private http: HttpClient) {}
    getEmpresas(): Observable<any> {
      return this.http.get(`${this.apiUrl}empresas`);


   }
  getEmpresa(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}empresa/${id}`);

  }

  createEmpresa(empresa: any): Observable<any> {
    return this.http.post(`${this.apiUrl}empresa`, empresa);

  }

  updateEmpresa(empresa: any): Observable<any> {
    return this.http.put(`${this.apiUrl}empresa/${empresa.id}`, empresa);

  }
  deleteEmpresa(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}empresa/${id}`);

  }
}

