import { TestBed } from '@angular/core/testing';

import { ArtisanserviceService } from './artisanservice.service';

describe('ArtisanserviceService', () => {
  let service: ArtisanserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtisanserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
