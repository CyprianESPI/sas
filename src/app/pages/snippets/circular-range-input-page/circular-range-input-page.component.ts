import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ShowCaseCodeComponent } from '../../../common/show-case-code/show-case-code.component';
import { CircularRangeInputComponent } from '../../../common/circular-range-input/circular-range-input.component';
import { ISourceCode } from '../../../models/i-source-code';

@Component({
  selector: 'app-circular-range-input-page',
  standalone: true,
  imports: [CommonModule, CircularRangeInputComponent, ShowCaseCodeComponent],
  template: `<app-circular-range-input [(angle)]="angle">
      <span>{{ angle() }}</span>
    </app-circular-range-input>
    <app-show-case-code [sources]="sources"></app-show-case-code>`,
  styleUrl: './circular-range-input-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircularRangeInputPageComponent {
  angle = signal<number>(0);
  sources: ISourceCode[] = [
    {
      name: 'example.html',
      code: '<app-circular-range-input></app-circular-range-input>',
    },
    {
      name: 'common/circular-range-input/circular-range-input.component.ts',
    },
    {
      name: 'common/circular-range-input/circular-range-input.component.scss',
    },
  ];
}
