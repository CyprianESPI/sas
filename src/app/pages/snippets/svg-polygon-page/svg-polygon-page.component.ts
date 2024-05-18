import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IPolygon } from '../../../models/i-polygon';
import { SvgPolygonComponent } from '../../../common/svg/svg-polygon/svg-polygon.component';

@Component({
  selector: 'app-svg-polygon-page',
  standalone: true,
  template: `<app-svg-polygon
    class="resizeable"
    [data]="{ polygon: polygon }"
  ></app-svg-polygon>`,
  styleUrl: './svg-polygon-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SvgPolygonComponent],
})
export class SvgPolygonPageComponent {
  polygon: IPolygon = {
    points: [
      { x: 0, y: 0 },
      { x: 3, y: 1 },
      { x: 5, y: 4 },
      { x: 2, y: 6 },
      { x: -1, y: 4 },
    ],
  };
}
