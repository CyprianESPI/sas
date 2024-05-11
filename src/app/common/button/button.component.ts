import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IComponentDataSearchable } from '../../models/i-component';

export interface ButtonData {
  callBack(): void;
  content: string;
  toolTip: string;
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button (click)="data.callBack()" [title]="data.toolTip">
    {{ data.content }}
  </button>`,
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input()
  data: ButtonData = { callBack: () => {}, content: '', toolTip: '' };
  @Input()
  searchText: string = '';

  static Make(data: ButtonData): IComponentDataSearchable {
    return {
      component: ButtonComponent,
      data: data,
      searchText: '',
      search(searchText) {
        const searchTextLC = searchText.toLowerCase();
        return Object.values(data).some((value) => {
          // Check string type
          if (typeof value === 'string' || value instanceof String)
            return value.toLowerCase().includes(searchTextLC);
          return false;
        });
      },
    };
  }
}
