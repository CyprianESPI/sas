import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IComponentData } from '../../models/i-component';
import { MatIconComponent } from '../mat-icon/mat-icon.component';

export interface ButtonFabData {
  iconName: string;
}

@Component({
  selector: 'app-button-fab',
  standalone: true,
  imports: [CommonModule, MatIconComponent],
  template: ` <app-mat-icon
    [data]="{ name: data.iconName, size: 20 }"
  ></app-mat-icon>`,
  styleUrl: './button-fab.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonFabComponent {
  @Input()
  data: ButtonFabData = {
    iconName: '',
  };

  static Make(data: ButtonFabData): IComponentData {
    return { component: ButtonFabComponent, data: data };
  }
}
