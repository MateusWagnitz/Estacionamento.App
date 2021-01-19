import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FinanceiroService } from '../../../services/financeiro.service';
import { CarroService } from '../../../services/carro.service';
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

  carros: Carros[];
  financeiro: Financeiro[];
  dataEstrada: Date = new Date();

  estacionamento: Estacionamento = {
    entrada: null,
    saida: null,
    valorTotal: 0.0,
    carroId: 0
  };

  constructor(
    private estacionamentoServico: EstacionamentoService,
    private carroServico: CarroService,
    private financeiroServico: FinanceiroService,
    private router: Router,
    private mensagemServico: MensagemService,
  ) { }

  ngOnInit() {
    this.carregarTicket();
    this.carregarCarros();
  }

  carregarCarros(): void {
    this.carroServico.getAll().subscribe(a => {
      this.carros = a;
    });
  }

  carregarTicket(): void {
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


}
