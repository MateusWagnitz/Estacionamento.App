import { Carros } from '../../../models/Carros';
import { Component, OnInit } from '@angular/core';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/services/mensagem.service';
import { FormControl, Validators } from '@angular/forms';

interface Carro {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.scss']
})
export class VeiculoCreateComponent implements OnInit {

  placaControl = new FormControl('', Validators.required);
  marcaControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  carro: Carros = {
    placa: '',
    marca: '',
    modelo: ''
  }

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
    private router: Router,
    private mensagemServico: MensagemService
  ) { }

  ngOnInit() {
  }

  cadastrarVeiculo(): void {
    this.veiculoServico.post(this.carro).subscribe(() => {
      this.mensagemServico.showMessage('Carro cadastrado com sucesso!');
      this.router.navigate(['/carros']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/carros']);
  }

}
