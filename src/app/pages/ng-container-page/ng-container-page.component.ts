import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../common/button/button.component';
import { CardComponent, CardData } from '../../common/card/card.component';
import { IComponentData } from '../../models/i-component';

@Component({
  selector: 'app-ng-container-page',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardComponent],
  template: ` @for(cmp of components; track cmp){
    <ng-container
      *ngComponentOutlet="cmp.component; inputs: { data: cmp.data }"
    >
    </ng-container>
    }`,
  styleUrl: './ng-container-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  handleClick(value: string) {
    // Update the inputs live
    const card = this.components[0];
    if (!card) return;
    const cardData: CardData = card.data as CardData;
    if (!cardData) return;
    card.data = {
      ...cardData,
      content: `${cardData.content} ${value}...`,
    };
  }
}
