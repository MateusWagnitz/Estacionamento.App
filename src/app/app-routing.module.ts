import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

import { FinanceiroComponent } from './views/financeiro/ticket.component';
import { FinanceiroCreateComponent } from './components/preco/ticket-create/ticket-create.component';

import { VeiculoComponent } from './views/veiculo/veiculo.component';
import { VeiculoCreateComponent } from './components/veiculo/veiculo-create/veiculo-create.component';
import { VeiculoDeleteComponent } from './components/veiculo/veiculo-delete/veiculo-delete.component';
import { VeiculoUpdateComponent } from './components/veiculo/veiculo-update/veiculo-update.component';

import { EstacionamentoComponent } from './views/estacionamento/estacionamento.component';
import { EstacionamentoCreateComponent } from './components/estacionamento/estacionamento-create/estacionamento-create.component';
import { EstacionamentoDeleteComponent } from './components/estacionamento/estacionamento-delete/estacionamento-delete.component';
import { EstacionamentoUpdateComponent } from './components/estacionamento/estacionamento-update/estacionamento-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'financeiro', component: FinanceiroComponent },
  { path: 'financeiro/create', component: FinanceiroCreateComponent },
  { path: 'veiculos', component: VeiculoComponent },
  { path: 'veiculos/create', component: VeiculoCreateComponent },
  { path: 'veiculos/delete/:id', component: VeiculoDeleteComponent },
  { path: 'veiculos/update/:id', component: VeiculoUpdateComponent },
  { path: 'estacionamentos', component : EstacionamentoComponent },
  { path: 'estacionamentos/create', component: EstacionamentoCreateComponent },
  { path: 'estacionamentos/delete/:id', component: EstacionamentoDeleteComponent },
  { path: 'estacionamentos/update/:id', component: EstacionamentoUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
