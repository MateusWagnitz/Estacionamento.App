import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FinanceiroService } from '../../../services/financeiro.service';
import { CarroService } from '../../../services/carro.service';
import { Financeiro } from 'src/app/models/Financeiro';
import { Carros } from '../../../models/Carros';
import { ClienteService } from '../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/services/mensagem.service';
import { Cliente } from 'src/app/models/Cliente';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  carros: Carros[];


  cliente: Cliente = {
    clienteId : null,
    cpf : null,
    nomeCompleto : null
  };

  constructor(
    private clienteServico: ClienteService,
    private router: Router,
    private mensagemServico: MensagemService,
  ) { }

  ngOnInit() {
    // this.carregarTicket();
    // this.carregarCarros();
  }

  // carregarCarros(): void {
  //   this.carroServico.Get().subscribe(a => {
  //     this.carros = a;
  //   });
  // }

  // carregarTicket(): void {
  //   this.financeiroServico.getAll().subscribe(a => {
  //     this.financeiro = a;
  //   });
  // }

  cadastrarCliente(): void {
    this.clienteServico.post(this.cliente).subscribe(() => {
      this.mensagemServico.showMessage('Cliente cadastrado com sucesso!');
      this.router.navigate(['/cliente']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/cliente']);
  }


}
