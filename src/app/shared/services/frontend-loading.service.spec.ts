import { TestBed } from '@angular/core/testing';

import { FrontendLoadingService } from './frontend-loading.service';

describe('FrontendLoadingService', () => {
  let service: FrontendLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontendLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
