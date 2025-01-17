import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByName',
  standalone: true,
})
export class SortByNamePipe implements PipeTransform {

  transform(artisans: any[],
    search: string): any [] {
      if (!artisans) return [];
      if (!search) return artisans;
      search = search.toLocaleLowerCase();
      return artisans.filter(it => {
        return it ['name'].toLocaleLowerCase().includes(search)
      });
    }
    
  }