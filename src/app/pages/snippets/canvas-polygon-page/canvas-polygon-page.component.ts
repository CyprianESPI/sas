import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IPolygon } from '../../../models/i-polygon';
import { CanvasPolygonComponent } from '../../../common/canvas/canvas-polygon/canvas-polygon.component';

@Component({
  selector: 'app-canvas-polygon-page',
  standalone: true,
  imports: [CommonModule, CanvasPolygonComponent],
  template: `<app-canvas-polygon
    class="resizeable"
    [data]="{ polygon: polygon }"
  ></app-canvas-polygon>`,
  styleUrl: './canvas-polygon-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasPolygonPageComponent {
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
