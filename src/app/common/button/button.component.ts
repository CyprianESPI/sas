import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button (click)="onClick()">{{ content }}</button>`,
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input()
  content: string = '';

  @Output() buttonClicked = new EventEmitter<void>(); // Emitting an event without any data

  onClick(): void {
    console.log(`onClick(${this.content})`);
    this.buttonClicked.emit(); // Emitting the click event
  }
}
