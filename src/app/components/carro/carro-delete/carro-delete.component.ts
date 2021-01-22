import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Carros } from '../../../models/carro.model';
import { CarroService } from '../../../services/carro.service';

import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-carro-delete',
  templateUrl: './carro-delete.component.html',
  styleUrls: ['./carro-delete.component.scss']
})
export class CarroDeleteComponent implements OnInit {

  carro: Carros;

  constructor(
    private carroServico: CarroService,
    private mensagemServico: MensagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.carroServico.getById(id).subscribe((carro) => {
      this.carro = carro;
    });
  }

  apagarCarro(): void {
    this.carroServico.delete(this.carro.carroId).subscribe(() => {
      this.mensagemServico.showMessage('Carro excluido com sucesso!');

      this.router.navigate(['/carros']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/carros']);
  }

}
