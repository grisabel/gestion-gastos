import { TestBed } from '@angular/core/testing';

import { NotBackService } from './not-back.service';

describe('NotBackService', () => {
  let service: NotBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
