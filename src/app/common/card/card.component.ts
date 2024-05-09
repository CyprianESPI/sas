import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CustomComponent } from '../../models/custom-component';

export interface CardComponentData extends CustomComponent {
  inputs: { title: string; content: string };
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>{{ title }}</h2>
    <p>{{ content }}</p>`,
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()
  title: string = '';
  @Input()
  content: string = '';

  static MakeComponentData(title: string, content: string): CardComponentData {
    return {
      component: CardComponent,
      inputs: { title, content },
    };
  }
}
