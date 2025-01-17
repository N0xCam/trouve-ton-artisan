import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory',
  standalone: true
})
export class FilterByCategoryPipe implements PipeTransform {

  
  transform(artisans: any[],
    search: string): any[] {
       if (!artisans) return [];
       if (!search) return artisans;
       search = search.toLowerCase();
       return artisans.filter(it => it.category.toLowerCase().includes(search));
     }
   }
