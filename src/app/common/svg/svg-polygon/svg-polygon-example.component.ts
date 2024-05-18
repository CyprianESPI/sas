import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgPolygonComponent } from './svg-polygon.component';
import { IPolygon } from '../../../models/i-polygon';

@Component({
  selector: 'app-svg-polygon-example',
  standalone: true,
  template: `<app-svg-polygon
    style="resize:both; overflow: hidden;"
    [data]="{ polygon: polygon }"
  ></app-svg-polygon>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SvgPolygonComponent],
})
export class SvgPolygonExampleComponent {
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
