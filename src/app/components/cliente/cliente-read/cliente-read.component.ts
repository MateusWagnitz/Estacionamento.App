import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../../models/cliente.model';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.scss']
})
export class ClienteReadComponent implements OnInit {

  cliente: Cliente[];

  displayedColumns = ['clienteId', 'cpf', 'nomeCompleto'];


  constructor(
    private clienteServico: ClienteService
  ) { }

  ngOnInit() {
    this.clienteServico.getAll().subscribe(cliente => {
      this.cliente = cliente;
    });
  }

}
