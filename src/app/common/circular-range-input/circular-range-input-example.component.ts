import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CircularRangeInputComponent } from './circular-range-input.component';

@Component({
  selector: 'app-circular-range-input-example',
  standalone: true,
  imports: [CommonModule, CircularRangeInputComponent],
  template: `<app-circular-range-input [(angle)]="angle">
    <span>{{ angle() }}</span>
  </app-circular-range-input>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircularRangeInputExampleComponent {
  angle = signal<number>(0);
}
