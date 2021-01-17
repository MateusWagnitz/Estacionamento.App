import { EstacionamentoService } from './../../../services/estacionamento.service';
import { Estacionamento } from './../../../models/Estacionamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estacionamento-read',
  templateUrl: './estacionamento-read.component.html',
  styleUrls: ['./estacionamento-read.component.scss']
})
export class EstacionamentoReadComponent implements OnInit {

  estacionamentos: Estacionamento[];

  // displayedColumns = ['id', 'placa', 'entradaData', 'entradaHora', 'saidaData', 'saidaHora', 'valorHora', 'valotTotal', 'acoes'];

  displayedColumns = ['placa', 'entrada', 'saida', 'valorHora', 'valorTotal', 'acoes'];

  constructor(
    private estacionamentoServico: EstacionamentoService
  ) { }

  ngOnInit() {
    this.estacionamentoServico.getAll().subscribe(estacionamentos => {
      this.estacionamentos = estacionamentos;
      console.log(estacionamentos);
    });
  }

}
