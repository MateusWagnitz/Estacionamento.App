import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';

import { FinanceiroComponent } from './views/financeiro/ticket.component';
import { TicketReadComponent } from './components/financeiro/ticket-read/ticket-read.component';
import { FinanceiroCreateComponent } from './components/financeiro/ticket-create/ticket-create.component';

import { VeiculoComponent } from './views/veiculo/veiculo.component';
import { VeiculoReadComponent } from './components/veiculo/veiculo-read/veiculo-read.component';
import { VeiculoCreateComponent } from './components/veiculo/veiculo-create/veiculo-create.component';
import { VeiculoDeleteComponent } from './components/veiculo/veiculo-delete/veiculo-delete.component';
import { VeiculoUpdateComponent } from './components/veiculo/veiculo-update/veiculo-update.component';

import { EstacionamentoComponent } from './views/estacionamento/estacionamento.component';
import { EstacionamentoReadComponent } from './components/estacionamento/estacionamento-read/estacionamento-read.component';
import { EstacionamentoCreateComponent } from './components/estacionamento/estacionamento-create/estacionamento-create.component';
import { EstacionamentoDeleteComponent } from './components/estacionamento/estacionamento-delete/estacionamento-delete.component';
import { EstacionamentoUpdateComponent } from './components/estacionamento/estacionamento-update/estacionamento-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,

    FinanceiroComponent,
    TicketReadComponent,
    FinanceiroCreateComponent,

    VeiculoComponent,
    VeiculoReadComponent,
    VeiculoCreateComponent,
    VeiculoDeleteComponent,
    VeiculoUpdateComponent,

    EstacionamentoComponent,
    EstacionamentoReadComponent,
    EstacionamentoCreateComponent,
    EstacionamentoDeleteComponent,
    EstacionamentoUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  providers: [
    MatFormFieldModule,
    MatDatepickerModule,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
