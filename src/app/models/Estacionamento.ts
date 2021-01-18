import { Time } from '@angular/common';

export class Estacionamento {
  id?: number;
  entrada: Date;
  saida: Date;
  valorTotal: number;
  // tabelaPrecoId: number;
  veiculoId: number;

  constructor(){
    this.id = 0;
    this.entrada = null;
    this.saida = null;
    this.valorTotal  = 0;
    // this.tabelaPrecoId = 0;
    this.veiculoId = 0;
  }
}
