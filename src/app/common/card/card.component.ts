import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ComponentData } from '../../models/component-data';

export interface CardInputs {
  content: string;
  title: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>{{ inputs.title }}</h2>
    <p>{{ inputs.content }}</p>`,
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()
  inputs: CardInputs = { content: '', title: '' };

  static Make(inputs: CardInputs): ComponentData {
    return {
      component: CardComponent,
      inputs: { inputs: inputs },
    };
  }
}
