import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CardComponent, CardData } from '../../common/card/card.component';
import { ButtonComponent } from '../../common/button/button.component';
import { ClickEventService } from '../../services/click-event.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MergePipe } from '../../pipes/merge.pipe';
import { IComponentDataSearchable } from '../../models/i-component';

@Component({
  selector: 'app-full-custom-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    MergePipe,
  ],
  template: `
    <h2>Txt input</h2>
    <input type="text" [(ngModel)]="searchText" />
    <p>{{ searchText }}</p>
    <h2>Custom</h2>
    <ng-container
      *ngComponentOutlet="card.component; inputs: { data: card.data }"
    >
    </ng-container>
    <ng-container
      *ngComponentOutlet="button.component; inputs: { data: button.data }"
    >
    </ng-container>
    <h2>Hardcoded</h2>
    <app-button [data]="{ content: 'abc', toolTip: 'edf' }"></app-button>
    <h2>From list</h2>
    @for(cmp of components; track cmp){
    <ng-container
      *ngComponentOutlet="
        cmp.component;
        inputs: { data: cmp.data, searchText: searchText }
      "
    >
    </ng-container>
    }
  `,
  styleUrl: './full-custom-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullCustomPageComponent implements OnInit {
  button: IComponentDataSearchable = ButtonComponent.Make({
    content: 'new text',
    toolTip: 'abcd',
  });
  card: IComponentDataSearchable = CardComponent.Make({
    title: 'title',
    content: 'this is the content',
  });
  components: IComponentDataSearchable[] = [
    this.button,
    this.card,
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

  handleClickEvent(value: any): void {
    console.log(`handleEvent(${value})`);
    // Update the inputs live
    const newData: CardData = { content: value, title: value };
    if (this.card.data) this.card.data = newData;
  }
}
