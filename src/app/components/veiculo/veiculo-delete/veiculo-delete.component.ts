import { Carros } from '../../../models/Carros';
import { VeiculoService } from './../../../services/veiculo.service';
import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/services/mensagem.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veiculo-delete',
  templateUrl: './veiculo-delete.component.html',
  styleUrls: ['./veiculo-delete.component.scss']
})
export class VeiculoDeleteComponent implements OnInit {

  veiculo: Carros;

  constructor(
    private veiculoServico: VeiculoService,
    private mensagemServico: MensagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.veiculoServico.getById(id).subscribe((veiculo) => {
      this.veiculo = veiculo;
    });
  }

  apagarVeiculo(): void {
    this.veiculoServico.delete(this.veiculo.id).subscribe(() => {
      this.mensagemServico.showMessage('Veículo excluido com sucesso!');

      this.router.navigate(['/carros']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/carros']);
  }

}
