export class Financeiro {
  ticketId?: number;
  vigenciaInicial: Date;
  vigenciaFinal: Date;
  valorHora: number;

  constructor(){
    this.ticketId = 0;
    this.vigenciaInicial = null;
    this.vigenciaFinal = null;
    this.valorHora = 0.0;
  }
}
