import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBitacora } from './editar-bitacora';

describe('EditarBitacora', () => {
  let component: EditarBitacora;
  let fixture: ComponentFixture<EditarBitacora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarBitacora]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarBitacora);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
