import { Time } from '@angular/common';

export class Estacionamento {
  id?: number;
  entrada: Date;
  saida: Date;
  valorTotal: number;
  carroId: number;

  constructor(){
    this.id = 0;
    this.entrada = null;
    this.saida = null;
    this.valorTotal  = 0;
    this.carroId = 0;
  }
}
