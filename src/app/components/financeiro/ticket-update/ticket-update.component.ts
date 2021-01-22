import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Financeiro } from 'src/app/models/financeiro.model';
import { FinanceiroService } from 'src/app/services/financeiro.service';

import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-ticket-update',
  templateUrl: './ticket-update.component.html',
  styleUrls: ['./ticket-update.component.css']
})
export class FinanceiroUpdateComponent implements OnInit {

  financeiro: Financeiro = {} as Financeiro

  constructor(

    private financeiroServico: FinanceiroService,
    private mensagemServico: MensagemService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.financeiroServico.getById(id).subscribe((financeiro) => {

    this.financeiro = financeiro;
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
