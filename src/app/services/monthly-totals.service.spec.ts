import { TestBed } from '@angular/core/testing';

import { MonthlyTotalsService } from './monthly-totals.service';

describe('MonthlyTotalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonthlyTotalsService = TestBed.get(MonthlyTotalsService);
    expect(service).toBeTruthy();
  });
});
