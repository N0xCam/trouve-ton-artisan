import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from '../artisanservice.service'

@Pipe({
  name: 'sortByName',
  standalone: true,
})
export class SortByNamePipe implements PipeTransform {
  transform(artisans: Artisan[], searchTerm: string): Artisan[] {
    if (!artisans || !searchTerm) {
      return artisans;
    }

      return artisans.filter((artisan) =>
        artisan.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
