import { CommonModule, NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import { CardComponent } from '../../common/card/card.component';

interface CustomComponent {
  component: Type<any>;
  inputs?: Record<string, any>;
}

@Component({
  selector: 'app-full-custom-page',
  standalone: true,
  imports: [CommonModule],
  template: `<p>full-custom-page works!</p>
    <ng-container *ngComponentOutlet="custom.component; inputs: custom.inputs">
    </ng-container>`,
  styleUrl: './full-custom-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullCustomPageComponent {
  custom: CustomComponent = {
    component: CardComponent,
    inputs: { title: 'Title', content: 'This is the content of the card' },
  };
}
