import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'batiment',
    standalone: true,
})
export class BatimentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
