import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CustomComponent } from '../../models/custom-component';

export interface CustomCardComponent extends CustomComponent {
  inputs: CardComponentInputs;
}

export interface CardComponentInputs {
  [key: string]: string;
  content: string;
  title: string;
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
  content: string = '';
  @Input()
  title: string = '';

  static MakeComponentData(inputs: CardComponentInputs): CustomCardComponent {
    return {
      component: CardComponent,
      inputs: inputs,
    };
  }
}
