import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'mergePipe',
  standalone: true,
})
export class MergePipe implements PipeTransform {
  transform(value: unknown, arg: unknown): Record<string, any> {
    return { ...(value as object), ...(arg as object) };
  }
}
