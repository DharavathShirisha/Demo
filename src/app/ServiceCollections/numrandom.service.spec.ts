import { TestBed } from '@angular/core/testing';

import { NumrandomService } from './numrandom.service';

describe('NumrandomService', () => {
  let service: NumrandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumrandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
