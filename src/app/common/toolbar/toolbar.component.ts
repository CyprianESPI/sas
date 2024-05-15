import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IComponentData } from '../../models/i-component';
import { ButtonComponent, ButtonData } from '../button/button.component';

export interface ToolbarData {
  buttons: ButtonData[];
  subTitle: string;
  title: string;
}

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `<h2>{{ data.title }}</h2>
    <p>{{ data.subTitle }}</p>
    <span style="display: flex; justify-content: space-around; flex-grow:1;">
      @for(btn of data.buttons;track btn){
      <app-button [data]="btn"></app-button>
      }
    </span>`,
  styleUrl: './toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  @Input()
  data: ToolbarData = { buttons: [], subTitle: '', title: '' };

  static Make(data: ToolbarData): IComponentData {
    return {
      component: ToolbarComponent,
      data: data,
    };
  }
}
