import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFuncinario } from './crear-funcinario';

describe('CrearFuncinario', () => {
  let component: CrearFuncinario;
  let fixture: ComponentFixture<CrearFuncinario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearFuncinario],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearFuncinario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
