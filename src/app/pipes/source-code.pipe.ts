import { Pipe, type PipeTransform } from '@angular/core';
import { ISourceCode } from '../models/i-source-code';

@Pipe({
  name: 'appSourceCode',
  standalone: true,
})
export class SourceCodePipe implements PipeTransform {
  transform(value: ISourceCode): string {
    return value.code ?? '';
  }
}
