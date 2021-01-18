import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FinanceiroService } from '../../../services/financeiro.service';
import { VeiculoService } from './../../../services/veiculo.service';
import { Financeiro } from 'src/app/models/Financeiro';
import { Carros } from '../../../models/Carros';
import { EstacionamentoService } from './../../../services/estacionamento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/services/mensagem.service';
import { Estacionamento } from 'src/app/models/Estacionamento';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-estacionamento-create',
  templateUrl: './estacionamento-create.component.html',
  styleUrls: ['./estacionamento-create.component.scss']
})
export class EstacionamentoCreateComponent implements OnInit {

  veiculos: Carros[];
  financeiro: Financeiro[];
  dataEstrada: Date = new Date();

  estacionamento: Estacionamento = {
    entrada: null,
    saida: null,
    valorTotal: 0.0,
    // tabelaPrecoId: 0,
    veiculoId: 0
  };

  constructor(
    private estacionamentoServico: EstacionamentoService,
    private veiculoServico: VeiculoService,
    private financeiroServico: FinanceiroService,
    private router: Router,
    private mensagemServico: MensagemService,
  ) { }

  ngOnInit() {
    this.carregarPrecos();
    this.carregarVeiculos();
    //this.estacionamento.entrada = this.dataEstrada;
  }

  carregarVeiculos(): void {
    this.veiculoServico.getAll().subscribe(a => {
      this.veiculos = a;
    });
  }

  carregarPrecos(): void {
    this.financeiroServico.getAll().subscribe(a => {
      this.financeiro = a;
    });
  }

  cadastrarEstacionamento(): void {
    this.estacionamentoServico.post(this.estacionamento).subscribe(() => {
      this.mensagemServico.showMessage('Estacionamento cadastrado com sucesso!');
      this.router.navigate(['/estacionamentos']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/estacionamentos']);
  }

  // procurarData(): void {
  //   console.log('ALTEROU!!!')
  //   this.estacionamento.tabelaPrecoId = 1;
  // }

}
