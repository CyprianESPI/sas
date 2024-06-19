import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShowCaseCodeComponent } from '../../../common/show-case-code/show-case-code.component';
import { ISourceCode } from '../../../models/i-source-code';
import { CircularRangeInputExampleComponent } from '../../../common/circular-range-input/circular-range-input-example.component';

@Component({
  selector: 'app-circular-range-input-page',
  standalone: true,
  imports: [
    CommonModule,
    CircularRangeInputExampleComponent,
    ShowCaseCodeComponent,
  ],
  template: `<app-circular-range-input-example></app-circular-range-input-example>
    <app-show-case-code [sources]="sources"></app-show-case-code>`,
  styleUrl: './circular-range-input-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircularRangeInputPageComponent {
  sources: ISourceCode[] = [
    {
      name: 'common/circular-range-input/circular-range-input-example.component.ts',
    },
    {
      name: 'common/circular-range-input/circular-range-input.component.ts',
    },
    {
      name: 'common/circular-range-input/circular-range-input.component.scss',
    },
  ];
}
