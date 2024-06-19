import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShowCaseCodeComponent } from '../../../common/show-case-code/show-case-code.component';
import { CircularRangeInputComponent } from '../../../common/circular-range-input/circular-range-input.component';
import { ISourceCode } from '../../../models/i-source-code';

@Component({
  selector: 'app-circular-range-input-page',
  standalone: true,
  imports: [CommonModule, CircularRangeInputComponent, ShowCaseCodeComponent],
  template: `<app-circular-range-input></app-circular-range-input>
    <app-show-case-code [sources]="sources"></app-show-case-code>`,
  styleUrl: './circular-range-input-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircularRangeInputPageComponent {
  sources: ISourceCode[] = [
    {
      name: 'example.html',
      code: '<app-circular-range-input></app-circular-range-input>',
    },
    {
      name: 'common/common/circular-range-input.component.ts',
    },
    {
      name: 'common/common/circular-range-input.component.scss',
    },
    {
      name: 'models/i-polygon.ts',
    },
    {
      name: 'models/i-point.ts',
    },
  ];
}
