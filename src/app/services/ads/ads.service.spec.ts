import { AdsService } from './ads.service';
import { TestBed } from '@angular/core/testing';



describe('AdsService', () => {
  let service: AdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
