import { Time } from '@angular/common';

export class Cliente {
  clienteId?: number;
  cpf: string;
  nomeCompleto: string;
  //carroId: number;

  constructor(){
    this.clienteId = 0;
    this.cpf = null;
    this.nomeCompleto = null;
    //this.carroId = 0;
  }
}
