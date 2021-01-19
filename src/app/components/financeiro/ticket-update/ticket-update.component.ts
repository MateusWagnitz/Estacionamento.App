import { Component, OnInit } from '@angular/core';
import { Financeiro } from 'src/app/models/Financeiro';
import { Carros } from 'src/app/models/Carros';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/services/mensagem.service';
import { FinanceiroService } from 'src/app/services/financeiro.service';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-ticket-update',
  templateUrl: './ticket-update.component.html',
  styleUrls: ['./ticket-update.component.css']
})
export class TicketUpdateComponent implements OnInit {

  carros: Carros[];
  financeiro: Financeiro;


  horaEntrada: Date = new Date();
  horaSaida: Date = new Date();
  valorTotal: number;

  constructor(
    private carroServico: CarroService,
    private financeiroServico: FinanceiroService,
    private mensagemServico: MensagemService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.financeiroServico.getById(id).subscribe((financeiro) => {
      this.financeiro = financeiro;
      this.financeiro.horaSaida = this.horaSaida;
      this.financeiro.horaSaida = this.horaSaida;
      this.financeiro.valorTotal = this.valorTotal;

    });
    this.carregarCarros();
  }

  carregarCarros(): void {
    this.carroServico.Get().subscribe(prob => {
      this.carros = prob;
    });
  }

  atualizarFinanceiro(): void {
    this.financeiroServico.put(this.financeiro).subscribe(() => {
      this.mensagemServico.showMessage('Financeiro atualizado com sucesso!');

      this.router.navigate(['/financeiro']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/financeiro']);
  }

}
