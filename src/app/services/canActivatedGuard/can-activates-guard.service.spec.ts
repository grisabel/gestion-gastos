import { TestBed } from '@angular/core/testing';

import { CanActivatesGuardService } from './can-activates-guard.service';

describe('CanActivatesGuardService', () => {
  let service: CanActivatesGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivatesGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
