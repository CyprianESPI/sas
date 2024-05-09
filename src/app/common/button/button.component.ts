import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ClickEventService } from '../../services/click-event.service';
import { CustomComponent } from '../../models/custom-component';

export interface CustomButtonComponent extends CustomComponent {
  inputs: ButtonComponentInputs;
}

export interface ButtonComponentInputs {
  [key: string]: string;
  content: string;
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button (click)="onClick()">{{ inputs.content }}</button>`,
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input()
  inputs: ButtonComponentInputs = { content: '' };

  constructor(private _clickEventService: ClickEventService) {}

  onClick(): void {
    // Forward the click event to the service
    this._clickEventService.emitClickEvent(this.inputs.content);
  }

  static MakeComponentData(
    inputs: ButtonComponentInputs
  ): CustomButtonComponent {
    return {
      component: ButtonComponent,
      inputs: inputs,
    };
  }
}
