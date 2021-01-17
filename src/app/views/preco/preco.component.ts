import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-preco',
  templateUrl: './preco.component.html',
  styleUrls: ['./preco.component.scss']
})
export class FinanceiroComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Tabela de Preços',
      icon: 'monetization_on',
      routeUrl: '/precos'
    };
  }

  ngOnInit() {
  }

  novoPreco(): void {
    this.router.navigate(['/precos/create']);
  }

}
