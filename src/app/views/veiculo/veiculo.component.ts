import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.scss']
})
export class VeiculoComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Tabela de Veículos',
      icon: 'time_to_leave',
      routeUrl: '/veiculos'
    };
  }

  ngOnInit() {
  }

  novoVeiculo(): void {
    this.router.navigate(['/veiculos/create']);
  }

}
