import { TestBed } from '@angular/core/testing';

import { EmpireService } from './empire.service';

describe('EmpireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpireService = TestBed.get(EmpireService);
    expect(service).toBeTruthy();
  });
});