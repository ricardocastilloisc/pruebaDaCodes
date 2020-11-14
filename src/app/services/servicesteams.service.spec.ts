import { TestBed } from '@angular/core/testing';

import { ServicesteamsService } from './servicesteams.service';

describe('ServicesteamsService', () => {
  let service: ServicesteamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesteamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
