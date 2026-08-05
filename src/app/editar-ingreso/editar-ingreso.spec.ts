import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarIngreso } from './editar-ingreso';

describe('EditarIngreso', () => {
  let component: EditarIngreso;
  let fixture: ComponentFixture<EditarIngreso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarIngreso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarIngreso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
