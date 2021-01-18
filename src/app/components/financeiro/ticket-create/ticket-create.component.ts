import { Component, OnInit } from '@angular/core';
import { Financeiro } from 'src/app/models/Financeiro';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/services/mensagem.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FinanceiroService } from 'src/app/services/financeiro.service';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.scss']
})
export class FinanceiroCreateComponent implements OnInit {

  financeiro: Financeiro = {
    horaEntrada: null,
    horaSaida: null,
    valorTotal: null,
  }

  constructor(
    private financeiroServico: FinanceiroService,
    private router: Router,
    private mensagemServico: MensagemService
  ) { }

  ngOnInit() {
  }

  cadastrarPreco(): void {
    this.financeiroServico.post(this.financeiro).subscribe(() => {
      this.mensagemServico.showMessage('Ticket cadastrado com sucesso!');
      this.router.navigate(['/ticket']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/ticket']);
  }

}
