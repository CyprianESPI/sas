import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appUrlEnd',
  standalone: true,
})
export class UrlEndPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('/').pop() ?? value;
  }
}
