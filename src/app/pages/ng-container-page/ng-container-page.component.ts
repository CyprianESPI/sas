import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../common/button/button.component';
import { CardComponent, CardData } from '../../common/card/card.component';
import { IComponentData } from '../../models/i-component';
import { ISourceCode } from '../../models/i-source-code';
import { ShowCaseCodeComponent } from '../../common/show-case-code/show-case-code.component';

@Component({
  selector: 'app-ng-container-page',
  standalone: true,
  template: `
    @for(cmp of components; track cmp){
    <ng-container
      *ngComponentOutlet="cmp.component; inputs: { data: cmp.data }"
    >
    </ng-container>
    }
    <app-show-case-code [sources]="sources"></app-show-case-code>
  `,
  styleUrl: './ng-container-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ButtonComponent,
    CardComponent,
    ShowCaseCodeComponent,
  ],
})
export class NgContainerPageComponent {
  components: IComponentData[] = [
    CardComponent.Make({
      content: 'content generated from typescript',
      title: 'TS card',
    }),
    ButtonComponent.Make({
      callBack: () => {
        this.handleClick('Button 1');
      },
      content: 'Button 1',
      toolTip: 'Adds content to card',
    }),
    ButtonComponent.Make({
      callBack: () => {
        this.handleClick('Button 2');
      },
      content: 'Button 2',
      toolTip: 'Adds content to card',
    }),
  ];

  sources: ISourceCode[] = [
    {
      name: 'html',
      code: `@for(cmp of components; track cmp){
  <ng-container
    *ngComponentOutlet="cmp.component; inputs: { data: cmp.data }"
  >
  </ng-container>
}`,
    },
    {
      name: 'typescript',
      code: `components: IComponentData[] = [
        CardComponent.Make({
          content: 'content generated from typescript',
          title: 'TS card',
        }),
        ButtonComponent.Make({
          callBack: () => {
            this.handleClick('Button 1');
          },
          content: 'Button 1',
          toolTip: 'Adds content to card',
        }),
        ButtonComponent.Make({
          callBack: () => {
            this.handleClick('Button 2');
          },
          content: 'Button 2',
          toolTip: 'Adds content to card',
        }),
      ];
      
      handleClick(value: string) {
        // Update the inputs live
        const card = this.components[0];
        if (!card) return;
        const cardData: CardData = card.data as CardData;
        if (!cardData) return;
        card.data = {
          ...cardData,
          content: cardData.content + ' ' + value + '...',
        };
      }
      `,
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
    {
      name: 'common/button/button.component.ts',
    },
    {
      name: 'common/button/button.component.scss',
    },
  ];

  handleClick(value: string) {
    // Update the inputs live
    const card = this.components[0];
    if (!card) return;
    const cardData: CardData = card.data as CardData;
    if (!cardData) return;
    card.data = {
      ...cardData,
      content: cardData.content + ' ' + value + '...',
    };
  }
}
