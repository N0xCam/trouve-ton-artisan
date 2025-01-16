import { Pipe, PipeTransform } from '@angular/core';
import { Top3 } from '../home/home.component'


@Pipe({
  name: 'top',
  standalone: true,
})
export class TopPipe implements PipeTransform {

  transform(top: Top3[], searchTerm: string): Top3[] {
    if (!top || !searchTerm) {
      return top;
    }

      return top.filter((top) =>
        top.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
