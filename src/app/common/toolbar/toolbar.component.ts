import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IComponentData } from '../../models/i-component';
import { ClickEventService } from '../../services/click-event.service';

export interface ToolbarData {
  subTitle: string;
  title: string;
}

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>{{ data.title }}</h2>
    <p>{{ data.subTitle }}</p>`,
  styleUrl: './toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  @Input()
  data: ToolbarData = { subTitle: '', title: '' };

  constructor(private _clickEventService: ClickEventService) {}

  onClick(): void {
    // Forward the click event to the service
    this._clickEventService.emitClickEvent(this.data.title);
  }

  static Make(data: ToolbarData): IComponentData {
    return {
      component: ToolbarComponent,
      data: data,
    };
  }
}
