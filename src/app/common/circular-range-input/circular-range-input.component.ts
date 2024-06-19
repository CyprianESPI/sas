import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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
}
