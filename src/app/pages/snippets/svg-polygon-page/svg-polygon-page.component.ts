import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgPolygonExampleComponent } from '../../../common/svg/svg-polygon/svg-polygon-example.component';
import { ShowCaseCodeComponent } from '../../../common/show-case-code/show-case-code.component';
import { ISourceCode } from '../../../models/i-source-code';

@Component({
  selector: 'app-svg-polygon-page',
  standalone: true,
  template: `<app-svg-polygon-example></app-svg-polygon-example>
    <app-show-case-code [sources]="sources"></app-show-case-code>`,
  styleUrl: './svg-polygon-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SvgPolygonExampleComponent, ShowCaseCodeComponent],
})
export class SvgPolygonPageComponent {
  sources: ISourceCode[] = [
    {
      name: 'common/svg/svg-polygon/svg-polygon-example.component.ts',
    },
    {
      name: 'common/svg/svg-polygon/svg-polygon.component.ts',
    },
    {
      name: 'common/svg/svg-polygon/svg-polygon.component.scss',
    },
    {
      name: 'models/i-polygon.ts',
    },
    {
      name: 'models/i-point.ts',
    },
  ];
}
