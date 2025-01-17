import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'top',
  standalone: true,
})
export class TopPipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
    
  }
    }

    
