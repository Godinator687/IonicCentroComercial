import { TestBed } from '@angular/core/testing';

import { ListalineablancaService } from './listalineablanca.service';

describe('ListalineablancaService', () => {
  let service: ListalineablancaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListalineablancaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
