import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchArtisanService } from '../services/search-artisan.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [ RouterLink],
  styleUrl: './header.component.scss',
})

export class HeaderComponent {
 
  constructor (
    private SearchArtisanService: SearchArtisanService,
  ) { }

onSearchInput(toSearchValue: string): void {
  this.SearchArtisanService.toSearch(toSearchValue);
} 
}




