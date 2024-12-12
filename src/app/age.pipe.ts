import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'age'
})
export class AgePipe implements PipeTransform {
  transform(value: number): string {
    if (value === 1) {
      return '1 year';
    } else {
      return `${value} years`;
    }
  }
}

