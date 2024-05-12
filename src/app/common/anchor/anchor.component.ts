import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface AnchorData {
  content: string;
  path: string;
}

@Component({
  selector: 'app-anchor',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `<a [routerLink]="data.path">{{ data.content }}</a>`,
  styleUrl: './anchor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnchorComponent {
  @Input()
  data: AnchorData = { content: '', path: '' };
}
