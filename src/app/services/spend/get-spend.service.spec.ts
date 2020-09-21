import { TestBed } from '@angular/core/testing';

import { GetSpendService } from './get-spend.service';

describe('GetSpendService', () => {
  let service: GetSpendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSpendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
