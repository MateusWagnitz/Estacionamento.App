import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-estacionamento',
  templateUrl: './estacionamento.component.html',
  styleUrls: ['./estacionamento.component.scss']
})
export class EstacionamentoComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Controle de Estacionamento',
      icon: 'local_parking',
      routeUrl: '/estacionamentos'
    };
  }

  ngOnInit() {
  }

  novoEstacionamento(): void {
    this.router.navigate(['/estacionamentos/create']);
  }

}
