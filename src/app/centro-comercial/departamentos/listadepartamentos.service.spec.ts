import { TestBed } from '@angular/core/testing';

import { ListadepartamentosService } from './listadepartamentos.service';

describe('ListadepartamentosService', () => {
  let service: ListadepartamentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadepartamentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
