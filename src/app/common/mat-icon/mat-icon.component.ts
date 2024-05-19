import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface MatIconData {
  name: string;
  size?: number;
}

@Component({
  selector: 'app-mat-icon',
  standalone: true,
  imports: [CommonModule],
  template: `<span class="material-icons" [style.fontSize]="data.size + 'px'">{{
    data.name
  }}</span>`,
  styleUrl: './mat-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatIconComponent {
  @Input()
  data: MatIconData = {
    name: '',
    size: 24,
  };
}
