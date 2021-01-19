import { Estacionamento } from 'src/app/models/Estacionamento';
import { Component, OnInit } from '@angular/core';
import { Carros } from 'src/app/models/Carros';
import { Financeiro } from 'src/app/models/Financeiro';
import { EstacionamentoService } from 'src/app/services/estacionamento.service';
import { CarroService } from 'src/app/services/carro.service';
import { FinanceiroService } from 'src/app/services/financeiro.service';
import { MensagemService } from 'src/app/services/mensagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-estacionamento-update',
  templateUrl: './estacionamento-update.component.html',
  styleUrls: ['./estacionamento-update.component.scss']
})
export class EstacionamentoUpdateComponent implements OnInit {

  carros: Carros[];
  financeiro: Financeiro[];
  estacionamento: Estacionamento;

  dataSaida: Date = new Date();
  valorHora: number;

  constructor(
    private estacionamentoServico: EstacionamentoService,
    private carroServico: CarroService,
    private financeiroServico: FinanceiroService,
    private mensagemServico: MensagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.estacionamentoServico.getById(id).subscribe((estacionamento) => {
      this.estacionamento = estacionamento;
      this.estacionamento.saida = this.dataSaida;

    });
    this.carregarCarros();
    this.carregarFinanceiro();
  }

  carregarCarros(): void {
    this.carroServico.getAll().subscribe(prob => {
      this.carros = prob;
    });
  }

  carregarFinanceiro(): void {
    this.financeiroServico.getAll().subscribe(prob => {
      this.financeiro = prob;
    });
  }

  atualizarFinanceiro(): void {
    this.estacionamentoServico.put(this.estacionamento).subscribe(() => {
      this.mensagemServico.showMessage('Financeiro atualizado com sucesso!');

      this.router.navigate(['/estacionamentos']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/estacionamentos']);
  }

}
