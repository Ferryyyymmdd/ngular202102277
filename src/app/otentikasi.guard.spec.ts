import { TestBed } from '@angular/core/testing';

import { OtentikasiGuard } from './otentikasi.guard';

describe('OtentikasiGuard', () => {
  let guard: OtentikasiGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OtentikasiGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
