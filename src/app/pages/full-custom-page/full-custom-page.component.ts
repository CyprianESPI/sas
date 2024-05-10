import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CardComponent, CardData } from '../../common/card/card.component';
import { ButtonComponent } from '../../common/button/button.component';
import { ClickEventService } from '../../services/click-event.service';
import { IComponent } from '../../models/i-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MergePipe } from '../../pipes/merge.pipe';

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
    <ng-container *ngComponentOutlet="card.component; inputs: card.inputs">
    </ng-container>
    <ng-container *ngComponentOutlet="button.component; inputs: button.inputs">
    </ng-container>
    <h2>Hardcoded</h2>
    <app-button [data]="{ content: 'abc', toolTip: 'edf' }"></app-button>
    <h2>From list</h2>
    @for(cmp of components; track cmp){
    <ng-container
      *ngComponentOutlet="
        cmp.component;
        inputs: cmp.inputs | mergePipe : { searchText: searchText }
      "
    >
    </ng-container>
    }
  `,
  styleUrl: './full-custom-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullCustomPageComponent implements OnInit {
  button: IComponent = ButtonComponent.Make({
    content: 'new text',
    toolTip: 'abcd',
  });
  card: IComponent = CardComponent.Make({
    title: 'title',
    content: 'this is the content',
  });
  components: IComponent[] = [
    this.button,
    this.card,
    { component: ButtonComponent },
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
    if (this.card.inputs) this.card.inputs['data'] = newData;
  }
}
