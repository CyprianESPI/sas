import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ClickEventService } from '../../services/click-event.service';
import { IComponentDataSearchable } from '../../models/i-component';

export interface ButtonData {
  content: string;
  toolTip: string;
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button (click)="onClick()" [title]="data.toolTip">
    {{ data.content }}
  </button>`,
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input()
  data: ButtonData = { content: '', toolTip: '' };
  @Input()
  searchText: string = '';

  constructor(private _clickEventService: ClickEventService) {}

  onClick(): void {
    // Forward the click event to the service
    this._clickEventService.emitClickEvent(this.data.content);
  }

  static Make(data: ButtonData): IComponentDataSearchable {
    return {
      component: ButtonComponent,
      data: data,
      searchText: '',
      search(searchText) {
        const searchTextLC = searchText.toLowerCase();
        return Object.values(data).some((value) => {
          return (value as string).toLowerCase().includes(searchTextLC);
        });
      },
    };
  }
}
