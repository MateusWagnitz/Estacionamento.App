/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrecoReadComponent } from './preco-read.component';

describe('PrecoReadComponent', () => {
  let component: PrecoReadComponent;
  let fixture: ComponentFixture<PrecoReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecoReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
