import { Component, OnInit } from '@angular/core';
import { Financeiro } from 'src/app/models/Financeiro';
import { FinanceiroService } from 'src/app/services/preco.service';

@Component({
  selector: 'app-ticket-read',
  templateUrl: './ticket-read.component.html',
  styleUrls: ['./ticket-read.component.scss']
})
export class PrecoReadComponent implements OnInit {

  financeiro: Financeiro[];

  displayedColumns = ['TicketId', 'horaEntrada', 'horaSaida', 'valorTotal' ];

  constructor(
    private financeiroServico: FinanceiroService
  ) { }

  ngOnInit() {
    this.financeiroServico.getAll().subscribe(financeiro => {
      this.financeiro = financeiro;
      console.log(financeiro);
    });
  }

}
