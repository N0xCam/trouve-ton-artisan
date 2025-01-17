import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByLocation',
  standalone: true
})
export class FilterByLocationPipe implements PipeTransform {

  transform(artisans: any[],
    search: string): any [] {
      if (!artisans) return [];
      if (!search) return artisans;
      search = search.toLocaleLowerCase();
      return artisans.filter(it => it.location.toLocaleLowerCase().includes(search))
      

    }

}
