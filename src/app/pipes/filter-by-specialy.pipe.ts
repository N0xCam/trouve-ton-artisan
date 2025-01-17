import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterVySpecialy',
  standalone: true,
})
export class FilterVySpecialyPipe implements PipeTransform {

  transform(artisans: any[],
    search: string): any [] {
      if (!artisans) return [];
      if (!search) return artisans;
      search = search.toLocaleLowerCase();
      return artisans.filter(it => it.specialty.toLowerCase().includes(search));
      

    }

}
