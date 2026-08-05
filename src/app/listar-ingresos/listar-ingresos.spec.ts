import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarIngresos } from './listar-ingresos';

describe('ListarIngresos', () => {
  let component: ListarIngresos;
  let fixture: ComponentFixture<ListarIngresos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarIngresos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarIngresos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
