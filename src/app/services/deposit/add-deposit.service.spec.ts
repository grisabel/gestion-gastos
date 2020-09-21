import { TestBed } from '@angular/core/testing';

import { AddDepositService } from './add-deposit.service';

describe('AddDepositService', () => {
  let service: AddDepositService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDepositService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
