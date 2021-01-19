import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../models/Cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.scss']
})
export class ClienteReadComponent implements OnInit {

  clientes: Cliente[];

  // displayedColumns = ['id', 'placa', 'entradaData', 'entradaHora', 'saidaData', 'saidaHora', 'valorHora', 'valotTotal', 'acoes'];

  displayedColumns = ['placa', 'entrada', 'saida',  'valorTotal', 'acoes'];

  constructor(
    private clienteServico: ClienteService
  ) { }

  ngOnInit() {
    this.clienteServico.getAll().subscribe(clientes => {
      this.clientes = clientes;
      console.log(clientes);
    });
  }

}
