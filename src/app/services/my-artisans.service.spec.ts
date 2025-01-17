import { TestBed } from '@angular/core/testing';

import { MyArtisansService } from './my-artisans.service';

describe('MyArtisansService', () => {
  let service: MyArtisansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyArtisansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
