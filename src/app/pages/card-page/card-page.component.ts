import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../../common/card/card.component';

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `<app-card
    [data]="{ title: 'Simple card', content: 'That displays text content' }"
  ></app-card>`,
  styleUrl: './card-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPageComponent {}
