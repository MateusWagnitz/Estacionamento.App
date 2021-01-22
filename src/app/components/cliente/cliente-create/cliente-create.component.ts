import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Carros } from '../../../models/carro.model';

import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from '../../../services/cliente.service';

import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  carros: Carros[];


  cliente: Cliente = { } as Cliente;

  constructor(
    private clienteServico: ClienteService,
    private router: Router,
    private mensagemServico: MensagemService,
  ) { }

  ngOnInit() {

  }

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
