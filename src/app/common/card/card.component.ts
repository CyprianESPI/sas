import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IComponent } from '../../models/i-component';

export interface CardData {
  content: string;
  title: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>{{ data.title }}</h2>
    <h3>{{ searchText }}</h3>
    <p>{{ data.content }}</p>`,
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input()
  data: CardData = { content: '', title: '' };
  @Input()
  searchText: string = '';

  ngOnInit(): void {
    console.log('CardComponent', this.data, this.searchText);
  }

  static Make(data: CardData): IComponent {
    return {
      component: CardComponent,
      inputs: { data: data },
    };
  }
}
