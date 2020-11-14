import { TestBed } from '@angular/core/testing';

import { ServicesfeaturedService } from './servicesfeatured.service';

describe('ServicesfeaturedService', () => {
  let service: ServicesfeaturedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesfeaturedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
