import { Component, OnInit } from '@angular/core';
import { Financeiro } from 'src/app/models/Financeiro';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/services/mensagem.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FinanceiroService } from 'src/app/services/preco.service';

@Component({
  selector: 'app-preco-create',
  templateUrl: './preco-create.component.html',
  styleUrls: ['./preco-create.component.scss']
})
export class FinanceiroCreateComponent implements OnInit {

  financeiro: Financeiro = {
    vigenciaInicial: null,
    vigenciaFinal: null,
    valorHora: null,
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
      this.mensagemServico.showMessage('Vigencia cadastrada com sucesso!');
      this.router.navigate(['/precos']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/precos']);
  }

}
