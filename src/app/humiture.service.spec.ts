import { TestBed } from '@angular/core/testing';

import { HumitureService } from './humiture.service';

describe('HumitureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HumitureService = TestBed.get(HumitureService);
    expect(service).toBeTruthy();
  });
});
