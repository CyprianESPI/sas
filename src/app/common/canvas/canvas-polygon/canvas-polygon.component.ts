import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { IPolygon } from '../../../models/i-polygon';

export interface CanvasPolygonData {
  polygon: IPolygon;
}

@Component({
  selector: 'app-canvas-polygon',
  standalone: true,
  imports: [CommonModule],
  template: `<canvas #graph></canvas>`,
  styleUrl: './canvas-polygon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasPolygonComponent implements AfterViewInit {
  @Input()
  data: CanvasPolygonData = { polygon: { points: [] } };

  @ViewChild('graph') graph!: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D | null = null;

  private offsetX: number = 0;
  private offsetY: number = 0;
  private scale: number = 1;

  ngAfterViewInit(): void {
    this.ctx = this.graph.nativeElement.getContext('2d');
    this.resizeCanvas();
    this.draw();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.resizeCanvas();
    this.draw();
  }

  private resizeCanvas() {
    const canvas = this.graph.nativeElement;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  private draw() {
    if (!this.ctx) return;

    const canvas = this.ctx.canvas;
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
    const scaleX = canvas.width / (maxX - minX);
    const scaleY = canvas.height / (maxY - minY);
    const scale = Math.min(scaleX, scaleY);

    // Calculate offset to center the drawing
    const offsetX = (canvas.width - (maxX - minX) * scale) / 2 - minX * scale;
    const offsetY = (canvas.height - (maxY - minY) * scale) / 2 - minY * scale;

    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.save();
    this.ctx.translate(offsetX, offsetY);
    this.ctx.scale(scale, scale);

    // Example drawing code
    this.ctx.fillStyle = 'rgba(100, 100, 200, 0.5)';
    points.forEach((point, index) => {
      if (index === 0) {
        this.ctx?.beginPath();
        this.ctx?.moveTo(point.x, point.y);
      } else {
        this.ctx?.lineTo(point.x, point.y);
      }
    });
    this.ctx.fill();

    this.ctx.restore();
  }
}
