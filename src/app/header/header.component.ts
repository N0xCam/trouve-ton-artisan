import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { SearchArtisanService } from '../services/search-artisan.service';
import { CommonModule} from "@angular/common";
import * as artisanData from "../../data/datas.json"

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [ RouterLink, CommonModule],
  styleUrl: './header.component.scss',
})

export class HeaderComponent {
  
  artisans: any[] = (artisanData as any).default;
  selectedArtisans: any[] | null = null;
 
  constructor (
    private route: ActivatedRoute,
    private SearchArtisanService: SearchArtisanService,
  ) { }

onSearchInput(toSearchValue: string): void {
  this.SearchArtisanService.toSearch(toSearchValue);
} 

ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
    const artisanId = params.get('id');
  });

  this.SearchArtisanService.artisanSelected$.subscribe((artisans) => {
    this.selectedArtisans = artisans;
  });
}

get isSearching(): boolean {
  return this.selectedArtisans !== null;
}


}




