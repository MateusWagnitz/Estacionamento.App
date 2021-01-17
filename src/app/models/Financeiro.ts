export class Financeiro {
  id?: number;
  vigenciaInicial: Date;
  vigenciaFinal: Date;
  valorHora: number;

  constructor(){
    this.id = 0;
    this.vigenciaInicial = null;
    this.vigenciaFinal = null;
    this.valorHora = 0.0;
  }
}
