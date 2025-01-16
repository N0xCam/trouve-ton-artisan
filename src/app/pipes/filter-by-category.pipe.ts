import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory',
  standalone: true
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(items:any[], cat:string): any[] {
    cat=cat.toLowerCase()
    return items.filter(items => items.category.toLowerCase().includes(cat))
  }

}
