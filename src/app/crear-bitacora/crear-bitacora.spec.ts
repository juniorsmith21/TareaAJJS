import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBitacora } from './crear-bitacora';

describe('CrearBitacora', () => {
  let component: CrearBitacora;
  let fixture: ComponentFixture<CrearBitacora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearBitacora]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearBitacora);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
