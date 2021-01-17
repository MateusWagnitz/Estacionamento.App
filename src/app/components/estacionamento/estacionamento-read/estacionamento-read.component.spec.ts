/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EstacionamentoReadComponent } from './estacionamento-read.component';

describe('EstacionamentoReadComponent', () => {
  let component: EstacionamentoReadComponent;
  let fixture: ComponentFixture<EstacionamentoReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstacionamentoReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacionamentoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
