import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ClickEventService } from '../../services/click-event.service';

export interface ButtonInputs {
  content: string;
  toolTip: string;
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button (click)="onClick()">
      {{ inputs.content }}
    </button>
    <p>{{ inputs.toolTip }}</p>`,
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input()
  inputs: ButtonInputs = { content: '', toolTip: '' };

  constructor(private _clickEventService: ClickEventService) {}

  ngOnInit(): void {
    console.log(this.inputs);
  }

  onClick(): void {
    // Forward the click event to the service
    this._clickEventService.emitClickEvent(this.inputs.content);
  }
}
