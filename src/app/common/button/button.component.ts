import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ClickEventService } from '../../services/click-event.service';
import { ComponentData } from '../../models/component-data';

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
export class ButtonComponent {
  @Input()
  inputs: ButtonInputs = { content: '', toolTip: '' };

  constructor(private _clickEventService: ClickEventService) {}

  onClick(): void {
    // Forward the click event to the service
    this._clickEventService.emitClickEvent(this.inputs.content);
  }

  static Make(inputs: ButtonInputs): ComponentData {
    return {
      component: ButtonComponent,
      inputs: { inputs: inputs },
    };
  }
}
