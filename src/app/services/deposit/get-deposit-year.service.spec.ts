import { TestBed } from '@angular/core/testing';

import { GetDepositYearService } from './get-deposit-year.service';

describe('GetDepositYearService', () => {
  let service: GetDepositYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDepositYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
