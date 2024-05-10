import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IComponentDataSearchable } from '../../models/i-component';

export interface CardData {
  content: string;
  title: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>{{ data.title }}</h2>
    <p>{{ data.content }}</p>`,
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()
  data: CardData = { content: '', title: '' };
  @Input()
  searchText: string = '';

  static Make(data: CardData): IComponentDataSearchable {
    return {
      component: CardComponent,
      data: data,
      searchText: '',
      search(searchText) {
        return Object.values(data).some(
          (value) => value.toLowerCase() === searchText.toLowerCase()
        );
      },
    };
  }
}
