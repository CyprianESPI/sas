import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CardComponent, CardData } from '../../common/card/card.component';
import { ButtonComponent } from '../../common/button/button.component';
import { ClickEventService } from '../../services/click-event.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IComponentDataSearchable } from '../../models/i-component';

@Component({
  selector: 'app-full-custom-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    CardComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: `
    <h2>SearchText</h2>
    <input type="text" [(ngModel)]="searchText" />
    <p>{{ searchText }}</p>

    <h2>From TS list</h2>
    @for(cmp of components; track cmp){ @if(!searchText ||
    cmp.search(searchText)) {
    <ng-container
      *ngComponentOutlet="
        cmp.component;
        inputs: { data: cmp.data, searchText: searchText }
      "
    >
    </ng-container>
    } }

    <h2>From DOM</h2>
    <app-card
      [data]="{ content: 'generated from DOM', title: 'DOM card' }"
    ></app-card>
    <app-button
      [data]="{
        callBack: getCallBack('click DOM btn'),
        content: 'click DOM btn',
        toolTip: 'DOM'
      }"
    ></app-button>
  `,
  styleUrl: './full-custom-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullCustomPageComponent implements OnInit {
  button: IComponentDataSearchable = ButtonComponent.Make({
    callBack: () => {
      this.handleClickEvent('click TS btn');
    },
    content: 'click TS btn',
    toolTip: 'TS',
  });
  card: IComponentDataSearchable = CardComponent.Make({
    title: 'TS Card',
    content:
      'below content is generated from TS, last 2 objects are created without data',
  });
  components: IComponentDataSearchable[] = [
    this.card,
    this.button,
    {
      component: CardComponent,
      data: {},
      searchText: '',
      search: () => false,
    },
    {
      component: ButtonComponent,
      data: {},
      searchText: '',
      search: () => false,
    },
  ];
  searchText: string = '';

  constructor(private _clickEventService: ClickEventService) {}

  ngOnInit(): void {
    // Subscribe to clickEventService
    this._clickEventService.clickEvent$.subscribe({
      next: (value) => {
        this.handleClickEvent(value);
      },
    });
  }

  getCallBack(value: string) {
    return () => {
      this.handleClickEvent(value);
    };
  }

  handleClickEvent(value: any): void {
    console.log(`handleEvent(${value})`);
    // Update the inputs live
    const cardData: CardData = this.card.data as CardData;
    if (cardData)
      this.card.data = {
        ...cardData,
        content: `${cardData.content}...${value}`,
      };
  }
}
