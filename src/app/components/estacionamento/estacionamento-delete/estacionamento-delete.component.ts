import { Estacionamento } from 'src/app/models/Estacionamento';
import { Component, OnInit } from '@angular/core';
import { EstacionamentoService } from 'src/app/services/estacionamento.service';
import { MensagemService } from 'src/app/services/mensagem.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estacionamento-delete',
  templateUrl: './estacionamento-delete.component.html',
  styleUrls: ['./estacionamento-delete.component.scss']
})
export class EstacionamentoDeleteComponent implements OnInit {

estacionamento: Estacionamento;

  constructor(
    private estacionamentoServico: EstacionamentoService,
    private mensagemServico: MensagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.estacionamentoServico.getById(id).subscribe((estacionamento) => {
      this.estacionamento = estacionamento;
    });
  }

  apagarEstacionamento(): void {
    this.estacionamentoServico.delete(this.estacionamento.id).subscribe(() => {
      this.mensagemServico.showMessage('Estacionamento excluido com sucesso!');

      this.router.navigate(['/estacionamentos']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/estacionamentos']);
  }
}
