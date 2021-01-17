import { Carros } from '../../../models/Carros';
import { Component, OnInit } from '@angular/core';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { MensagemService } from 'src/app/services/mensagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

interface Carro {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-veiculo-update',
  templateUrl: './veiculo-update.component.html',
  styleUrls: ['./veiculo-update.component.scss']
})
export class VeiculoUpdateComponent implements OnInit {

  marcaControl = new FormControl('', Validators.required);
  veiculo: Carros;

  carros: Carro[] = [
    { value: 'Chevrolet', viewValue: 'Chevrolet' },
    { value: 'Volkswagen', viewValue: 'Volkswagen' },
    { value: 'Fiat', viewValue: 'Fiat' },
    { value: 'Renault', viewValue: 'Renault' },
    { value: 'Ford', viewValue: 'Ford' },
    { value: 'Toyota', viewValue: 'Toyota' },
    { value: 'Hyundai', viewValue: 'Hyundai' },
    { value: 'Jeep', viewValue: 'Jeep' },
    { value: 'Honda', viewValue: 'Honda' },
    { value: 'Nissan', viewValue: 'Nissan' },
    { value: 'Citroën', viewValue: 'Citroën' },
    { value: 'Mitsubishi', viewValue: 'Mitsubishi' },
    { value: 'Peugeot', viewValue: 'Peugeot' },
    { value: 'Chery', viewValue: 'Chery' },
    { value: 'BMW', viewValue: 'BMW' },
    { value: 'Mercedes-Benz', viewValue: 'Mercedes-Benz' },
    { value: 'Kia', viewValue: 'Kia' },
    { value: 'Audi', viewValue: 'Audi' },
    { value: 'Volvo', viewValue: 'Volvo' },
    { value: 'Land Rover', viewValue: 'Land Rover' },

  ];

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

  atualizarVeiculo(): void {
    this.veiculoServico.put(this.veiculo).subscribe(() => {
      this.mensagemServico.showMessage('Veículo atualizado com sucesso!');

      this.router.navigate(['/carros']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/carros']);
  }
}
