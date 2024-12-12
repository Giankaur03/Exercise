import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'experience'
})
export class ExperiencePipe implements PipeTransform {

  transform(value: number): string {
    if( value ===0) {
      return 'New sitter';
    }else{
      return `${value} years experience`;
    }
  }

}
