import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

import { FinanceiroComponent } from './views/financeiro/ticket.component';
import { FinanceiroCreateComponent } from './components/financeiro/ticket-create/ticket-create.component';

import { CarroComponent } from './views/carro/carro.component';
import { CarroCreateComponent } from './components/carro/carro-create/carro-create.component';
import { CarroDeleteComponent } from './components/carro/carro-delete/carro-delete.component';
import { CarroUpdateComponent } from './components/carro/carro-update/carro-update.component';

import { EstacionamentoComponent } from './views/estacionamento/estacionamento.component';
import { EstacionamentoCreateComponent } from './components/estacionamento/estacionamento-create/estacionamento-create.component';
import { EstacionamentoDeleteComponent } from './components/estacionamento/estacionamento-delete/estacionamento-delete.component';
import { EstacionamentoUpdateComponent } from './components/estacionamento/estacionamento-update/estacionamento-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'financeiro', component: FinanceiroComponent },
  { path: 'financeiro/create', component: FinanceiroCreateComponent },
  { path: 'carros', component: CarroComponent },
  { path: 'carros/create', component: CarroCreateComponent },
  { path: 'carros/delete/:id', component: CarroDeleteComponent },
  { path: 'carros/update/:id', component: CarroUpdateComponent },
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
