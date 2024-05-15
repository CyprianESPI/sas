import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IPolygon } from '../../../models/i-polygon';
import { CanvasPolygonComponent } from '../../../common/canvas/canvas-polygon/canvas-polygon.component';

@Component({
  selector: 'app-canvas-polygon-page',
  standalone: true,
  imports: [CommonModule, CanvasPolygonComponent],
  template: `<app-canvas-polygon
    [data]="{ polygon: polygon }"
  ></app-canvas-polygon>`,
  styleUrl: './canvas-polygon-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasPolygonPageComponent {
  polygon: IPolygon = {
    points: [
      { x: 10, y: 10 },
      { x: 20, y: 20 },
      { x: 10, y: 40 },
      { x: 10, y: 10 },
    ],
  };
}
