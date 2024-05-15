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
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.save();
    this.ctx.translate(this.offsetX, this.offsetY);
    this.ctx.scale(this.scale, this.scale);

    const width = this.ctx.canvas.width;
    const height = this.ctx.canvas.height;

    // Example drawing code
    this.ctx.fillStyle = 'rgba(100, 100, 200, 0.5)';
    const points = this.data.polygon.points;
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
