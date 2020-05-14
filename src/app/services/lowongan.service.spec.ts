import { TestBed } from '@angular/core/testing';

import { LowonganService } from './lowongan.service';

describe('LowonganService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LowonganService = TestBed.get(LowonganService);
    expect(service).toBeTruthy();
  });
});
