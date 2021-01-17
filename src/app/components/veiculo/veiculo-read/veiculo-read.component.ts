import { VeiculoService } from './../../../services/veiculo.service';
import { Carros } from '../../../models/Carros';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculo-read',
  templateUrl: './veiculo-read.component.html',
  styleUrls: ['./veiculo-read.component.scss']
})
export class VeiculoReadComponent implements OnInit {

  veiculos: Carros[];

  displayedColumns = ['id', 'placa', 'marca', 'modelo', 'acoes'];

  constructor(
    private veiculoServico: VeiculoService
  ) { }

  ngOnInit() {
    this.veiculoServico.getAll().subscribe(veiculos => {
      this.veiculos = veiculos;
      console.log(veiculos);
    });
  }
}
