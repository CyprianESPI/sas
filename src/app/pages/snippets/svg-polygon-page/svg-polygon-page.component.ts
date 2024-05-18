import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgPolygonExampleComponent } from '../../../common/svg/svg-polygon/svg-polygon-example.component';

@Component({
  selector: 'app-svg-polygon-page',
  standalone: true,
  template: `<app-svg-polygon-example></app-svg-polygon-example>`,
  styleUrl: './svg-polygon-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SvgPolygonExampleComponent],
})
export class SvgPolygonPageComponent {}
