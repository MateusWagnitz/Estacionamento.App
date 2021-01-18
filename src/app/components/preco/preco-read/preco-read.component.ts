import { Component, OnInit } from '@angular/core';
import { Financeiro } from 'src/app/models/Financeiro';
import { FinanceiroService } from 'src/app/services/preco.service';

@Component({
  selector: 'app-preco-read',
  templateUrl: './preco-read.component.html',
  styleUrls: ['./preco-read.component.scss']
})
export class PrecoReadComponent implements OnInit {

  financeiro: Financeiro[];

  // displayedColumns = ['id', 'vigenciaInicial', 'vigenciaFinal', 'valorHora' , 'acoes'];
  //displayedColumns = ['id', 'vigenciaInicial', 'vigenciaFinal', 'valorHora' ];
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
