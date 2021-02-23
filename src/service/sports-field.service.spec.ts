import { TestBed } from '@angular/core/testing';

import { SportsFieldService } from './sports-field.service';

describe('SportsFieldService', () => {
  let service: SportsFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
