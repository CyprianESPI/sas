import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../../common/card/card.component';
import { ShowCaseComponent } from '../../common/show-case/show-case.component';
import { IComponentData } from '../../models/i-component';
import { ISourceCode } from '../../models/i-source-code';

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [CommonModule, CardComponent, ShowCaseComponent],
  template: `<app-show-case [cmp]="cmp" [sources]="sources"></app-show-case>`,
  styleUrl: './card-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPageComponent {
  cmp: IComponentData = {
    component: CardComponent,
    data: { title: 'Simple card', content: 'That displays text content' },
  };
  sources: ISourceCode[] = [
    {
      name: 'example.html',
      code: `<app-card [data]="{ title: 'Simple card',
      content: 'That displays text content' }">
      </app-card>`,
    },
    {
      name: 'models/i-component.ts',
    },
    {
      name: 'common/card/card.component.ts',
    },
    {
      name: 'common/card/card.component.scss',
    },
  ];
}
