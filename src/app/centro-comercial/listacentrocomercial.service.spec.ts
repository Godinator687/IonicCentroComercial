import { TestBed } from '@angular/core/testing';

import { ListacentrocomercialService } from './listacentrocomercial.service';

describe('ListacentrocomercialService', () => {
  let service: ListacentrocomercialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListacentrocomercialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
