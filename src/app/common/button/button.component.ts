import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ClickEventService } from '../../services/click-event.service';
import { CustomComponent } from '../../models/custom-component';

export interface ButtonComponentData extends CustomComponent {
  inputs: { content: string };
}

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

  constructor(private _clickEventService: ClickEventService) {}

  onClick(): void {
    // Forward the click event to the service
    this._clickEventService.emitClickEvent(this.content);
  }

  static MakeComponentData(content: string): ButtonComponentData {
    return {
      component: ButtonComponent,
      inputs: { content },
    };
  }
}
