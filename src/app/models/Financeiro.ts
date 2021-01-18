export class Financeiro {
  ticketId?: number;
  horaEntrada: Date;
  horaSaida: Date;
  valorTotal: number;

  constructor(){
    this.ticketId = 0;
    this.horaEntrada = null;
    this.horaSaida = null;
    this.valorTotal = 0.0;
  }
}
