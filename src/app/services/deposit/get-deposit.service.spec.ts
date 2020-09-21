import { TestBed } from '@angular/core/testing';

import { GetDepositService } from './get-deposit.service';

describe('GetDepositService', () => {
  let service: GetDepositService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDepositService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
