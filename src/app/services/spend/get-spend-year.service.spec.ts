import { TestBed } from '@angular/core/testing';

import { GetSpendYearService } from './get-spend-year.service';

describe('GetSpendYearService', () => {
  let service: GetSpendYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSpendYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
