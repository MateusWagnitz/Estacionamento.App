import { Estacionamento } from './../models/Estacionamento';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MensagemService } from './mensagem.service';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstacionamentoService {

  baseURL = `${environment.mainUrlAPI}estacionamento`;

  constructor(
    private http: HttpClient,
    private mensagemServico: MensagemService
  ) { }

  getAll(): Observable<Estacionamento[]> {
    return this.http.get<Estacionamento[]>(this.baseURL).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getById(id: number): Observable<Estacionamento> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Estacionamento>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getIdByData(data: Date): Observable<Estacionamento> {
    const url = `${this.baseURL}/${data}`;
    return this.http.get<Estacionamento>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  put(estacionamento: Estacionamento): Observable<Estacionamento> {
    const url = `${this.baseURL}/${estacionamento.id}`;
    return this.http.put<Estacionamento>(url, estacionamento).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  post(estacionamento: Estacionamento): Observable<Estacionamento> {
    console.log(estacionamento);
    return this.http.post<Estacionamento>(this.baseURL, estacionamento).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Estacionamento> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Estacionamento>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.mensagemServico.showMessage('Ocorreu um erro com o módulo Estacionamento!', true);
    return EMPTY;
  }

}
