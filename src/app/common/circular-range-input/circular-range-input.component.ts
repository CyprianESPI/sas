import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  model,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circular-range-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <ng-content></ng-content>
    </div>
    <svg viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" class="background-circle"></circle>
      <circle
        cx="50"
        cy="50"
        r="4"
        class="handle"
        [attr.transform]="handleTransform"
        (mousedown)="onMouseDown($event)"
        (touchstart)="onTouchStart($event)"
      ></circle>
    </svg>
  `,
  styleUrl: './circular-range-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircularRangeInputComponent {
  angle = model<number>(0);
  radius = 45;
  isDragging = false;

  get handleTransform() {
    const angleInRadians = -this.angle() * (Math.PI / 180);
    const x = 0 + this.radius * Math.cos(angleInRadians);
    const y = 0 + this.radius * Math.sin(angleInRadians);
    return `translate(${x} ${y})`;
  }

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.updateAngleFromEvent(event);
  }

  onTouchStart(event: TouchEvent) {
    this.isDragging = true;
    this.updateAngleFromEvent(event.touches[0]);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.updateAngleFromEvent(event);
    }
  }

  @HostListener('window:touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (this.isDragging) {
      this.updateAngleFromEvent(event.touches[0]);
    }
  }

  @HostListener('window:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }

  @HostListener('window:touchend')
  onTouchEnd() {
    this.isDragging = false;
  }

  private updateAngleFromEvent(event: MouseEvent | Touch) {
    const svg = (event.target as SVGElement).closest('svg');
    const rect = svg!.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    let angle = -Math.atan2(dy, dx) * (180 / Math.PI);
    angle = (angle + 360) % 360; // Normalize the angle
    this.angle.set(angle);
  }
}
