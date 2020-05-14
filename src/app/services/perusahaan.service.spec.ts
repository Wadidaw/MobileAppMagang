import { TestBed } from '@angular/core/testing';

import { PerusahaanService } from './perusahaan.service';

describe('PerusahaanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerusahaanService = TestBed.get(PerusahaanService);
    expect(service).toBeTruthy();
  });
});
