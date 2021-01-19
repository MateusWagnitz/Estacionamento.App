import { CarroService } from '../../../services/carro.service';
import { Carros } from '../../../models/Carros';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carro-read',
  templateUrl: './carro-read.component.html',
  styleUrls: ['./carro-read.component.scss']
})
export class CarroReadComponent implements OnInit {

  carros: Carros[];

  displayedColumns = ['carroId', 'placa', 'marca', 'modelo', 'acoes'];

  constructor(
    private carroServico: CarroService
  ) { }

  ngOnInit() {
    this.carroServico.getAll().subscribe(carros => {
      this.carros = carros;
      console.log(carros);
    });
  }
}