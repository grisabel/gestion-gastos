import { TestBed } from '@angular/core/testing';

import { GetDepositMonthService } from './get-deposit-month.service';

describe('GetDepositMonthService', () => {
  let service: GetDepositMonthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDepositMonthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
