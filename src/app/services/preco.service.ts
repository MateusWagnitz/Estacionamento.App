import { Financeiro } from '../models/Financeiro';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MensagemService } from './mensagem.service';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  baseURL = `${environment.mainUrlAPI}financeiro`;

  constructor(
    private http: HttpClient,
    private mensagemServico: MensagemService
  ) { }

  getAll(): Observable<Financeiro[]> {
    return this.http.get<Financeiro[]>(this.baseURL).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getById(id: number): Observable<Financeiro> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Financeiro>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  put(financeiro: Financeiro): Observable<Financeiro> {
    const url = `${this.baseURL}/${financeiro.id}`;
    return this.http.put<Financeiro>(url, financeiro).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  post(financeiro: Financeiro): Observable<Financeiro> {
    return this.http.post<Financeiro>(this.baseURL, financeiro).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Financeiro> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Financeiro>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    if (e.status === 409)
    {
      this.mensagemServico.showMessage('Esta data já está sendo usada como vigência', true);
    }
    else
    {
      this.mensagemServico.showMessage('Ocorreu um erro com o módulo Financeiro!', true);
    }
    return EMPTY;
  }

}
