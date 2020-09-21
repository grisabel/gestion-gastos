import { TestBed } from '@angular/core/testing';

import { GetSpendMonthService } from './get-spend-month.service';

describe('GetSpendMonthService', () => {
  let service: GetSpendMonthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSpendMonthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
