import { TestBed } from '@angular/core/testing';

import { GetsDataService } from './gets-data.service';

describe('GetsDataService', () => {
  let service: GetsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
