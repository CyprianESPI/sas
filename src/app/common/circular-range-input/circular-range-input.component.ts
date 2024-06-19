import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circular-range-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `<div class="circular-range-input">
    <svg viewBox="0 0 100 100" class="circle-svg">
      <circle cx="50" cy="50" r="45" class="background-circle"></circle>
      <circle
        cx="50"
        cy="50"
        r="45"
        class="progress-circle"
        [attr.stroke-dasharray]="circumference"
        [attr.stroke-dashoffset]="strokeOffset"
      ></circle>
      <circle
        cx="50"
        cy="50"
        r="5"
        class="handle"
        [attr.transform]="handleTransform"
        (mousedown)="onMouseDown($event)"
        (touchstart)="onTouchStart($event)"
      ></circle>
    </svg>
    <input
      type="range"
      min="0"
      max="360"
      step="1"
      [(ngModel)]="angle"
      (input)="onInputChange($event)"
    />
  </div>`,
  styleUrl: './circular-range-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircularRangeInputComponent {
  angle = 0;
  radius = 45;
  circumference = 2 * Math.PI * this.radius;
  isDragging = false;

  get strokeOffset() {
    return this.circumference - (this.angle / 360) * this.circumference;
  }

  get handleTransform() {
    const angleInRadians = (this.angle - 90) * (Math.PI / 180);
    const x = 50 + this.radius * Math.cos(angleInRadians);
    const y = 50 + this.radius * Math.sin(angleInRadians);
    return `translate(${x} ${y})`;
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.angle = Number(input.value);
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
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    if (angle < 0) {
      angle += 360; // Normalize the angle
    }
    this.angle = angle;
  }
}
