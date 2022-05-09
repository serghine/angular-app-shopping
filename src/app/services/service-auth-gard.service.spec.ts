import { TestBed } from '@angular/core/testing';

import { ServiceAuthGardService } from './service-auth-gard.service';

describe('ServiceAuthGardService', () => {
  let service: ServiceAuthGardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAuthGardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
