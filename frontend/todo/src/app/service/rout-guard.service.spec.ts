import { TestBed } from '@angular/core/testing';

import { RoutGuardService } from './rout-guard.service';

describe('RoutGuardService', () => {
  let service: RoutGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
