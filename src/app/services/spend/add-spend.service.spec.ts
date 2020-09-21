import { TestBed } from '@angular/core/testing';

import { AddSpendService } from './add-spend.service';

describe('AddSpendService', () => {
  let service: AddSpendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSpendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
