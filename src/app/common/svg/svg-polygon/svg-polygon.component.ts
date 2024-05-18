import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { IPolygon } from '../../../models/i-polygon';

export interface SvgPolygonData {
  polygon: IPolygon;
}

@Component({
  selector: 'app-svg-polygon',
  standalone: true,
  imports: [CommonModule],
  template: `<svg #graph [attr.width]="width" [attr.height]="height"></svg>`,
  styleUrl: './svg-polygon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPolygonComponent implements AfterViewInit, OnDestroy {
  @ViewChild('graph') graph!: ElementRef<SVGSVGElement>;
  @Input()
  data: SvgPolygonData = { polygon: { points: [] } };

  width: number = 300;
  height: number = 300;
  private resizeObserver!: ResizeObserver;

  ngAfterViewInit(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.resizeSVG();
      this.draw();
    });
    this.resizeObserver.observe(this.graph.nativeElement);
    this.resizeSVG();
    this.draw();
  }

  ngOnDestroy(): void {
    this.resizeObserver.disconnect();
  }

  private resizeSVG() {
    const svg = this.graph.nativeElement;
    this.width = svg.clientWidth;
    this.height = svg.clientHeight;
  }

  private draw() {
    const svg = this.graph.nativeElement;
    svg.innerHTML = ''; // Clear previous drawing

    const points = this.data.polygon.points;

    if (points.length === 0) return;

    // Find the bounding box of the polygon
    let minX = points[0].x;
    let maxX = points[0].x;
    let minY = points[0].y;
    let maxY = points[0].y;

    for (const point of points) {
      minX = Math.min(minX, point.x);
      maxX = Math.max(maxX, point.x);
      minY = Math.min(minY, point.y);
      maxY = Math.max(maxY, point.y);
    }

    // Calculate scaling factors
    const scaleX = this.width / (maxX - minX);
    const scaleY = this.height / (maxY - minY);
    const scale = Math.min(scaleX, scaleY);

    // Calculate offset to center the drawing
    const offsetX = (this.width - (maxX - minX) * scale) / 2 - minX * scale;
    const offsetY = (this.height - (maxY - minY) * scale) / 2 - minY * scale;

    const pointsString = points
      .map(
        (point) => `${point.x * scale + offsetX},${point.y * scale + offsetY}`
      )
      .join(' ');

    const polygon = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'polygon'
    );
    polygon.setAttribute('points', pointsString);
    polygon.setAttribute('fill', 'rgba(100, 100, 200, 0.5)');

    svg.appendChild(polygon);
  }
}
