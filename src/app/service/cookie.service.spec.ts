import { TestBed, inject } from '@angular/core/testing';

import { CookieHandler } from './cookie.service';

describe('CookieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookieHandler]
    });
  });

  it('should be created', inject([CookieHandler], (service: CookieHandler) => {
    expect(service).toBeTruthy();
  }));
});
