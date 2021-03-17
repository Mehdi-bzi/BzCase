import { TestBed } from '@angular/core/testing';

import { GasolineService } from './gasoline.service';

describe('GasolineService', () => {
  let service: GasolineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GasolineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
