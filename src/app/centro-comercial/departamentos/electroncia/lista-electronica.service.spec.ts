import { TestBed } from '@angular/core/testing';

import { ListaElectronicaService } from './lista-electronica.service';

describe('ListaElectronicaService', () => {
  let service: ListaElectronicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaElectronicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
