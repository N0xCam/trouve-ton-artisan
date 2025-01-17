import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as dataArtisans from '../../data/datas.json'

@Injectable({
  providedIn: 'root'
})
export class SearchArtisanService {

  private artisanSearch = new BehaviorSubject<any | null>(null);
  artisanSelected$ = this.artisanSearch.asObservable();

  artisans: any [] = (dataArtisans as any).default;

toSearch(toSearchValue: string): void {
  if (toSearchValue.trim()=== '') {
    this.artisanSearch.next(null);
    return;
}

const artisansFound = this.artisans.filter((MyArtisan) =>
  MyArtisan.name.toLowerCase().includes(toSearchValue.toLowerCase()) ||
  MyArtisan.specialty.toLowerCase().includes(toSearchValue.toLowerCase()) ||
  MyArtisan.location.toLowerCase().includes(toSearchValue.toLowerCase()) 
);

this.artisanSearch.next(artisansFound);
}
}
