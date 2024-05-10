import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ClickEventService } from '../../services/click-event.service';
import { ComponentData } from '../../models/component-data';

export interface ButtonData {
  content: string;
  toolTip: string;
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button (click)="onClick()">
      {{ data.content }}
    </button>
    <p>{{ data.toolTip }}</p>`,
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input()
  data: ButtonData = { content: '', toolTip: '' };

  constructor(private _clickEventService: ClickEventService) {}

  onClick(): void {
    // Forward the click event to the service
    this._clickEventService.emitClickEvent(this.data.content);
  }

  static Make(data: ButtonData): ComponentData {
    return {
      component: ButtonComponent,
      inputs: { data: data },
    };
  }
}
