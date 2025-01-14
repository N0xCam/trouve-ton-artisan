import { Pipe, PipeTransform } from '@angular/core';
import { Top3 } from './home/home.component';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {

  transform(artisans: Top3[], searchArtisans: string): Top3[] {
    if (!artisans || !searchArtisans) {
      return artisans;
    }

      return artisans.filter((artisan) =>
        artisan.name.toLowerCase().includes(searchArtisans.toLowerCase())
      );
    
      
    
    
}
}
