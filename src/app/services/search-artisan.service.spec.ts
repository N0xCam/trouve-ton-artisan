import { TestBed } from '@angular/core/testing';

import { SearchArtisanService } from '../services/search-artisan.service';

describe('SearchArtisanService', () => {
  let service: SearchArtisanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchArtisanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
