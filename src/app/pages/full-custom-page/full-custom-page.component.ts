import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CardComponent, CardInputs } from '../../common/card/card.component';
import { ButtonComponent } from '../../common/button/button.component';
import { ClickEventService } from '../../services/click-event.service';
import { ComponentData } from '../../models/component-data';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-full-custom-page',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FormsModule, ReactiveFormsModule],
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
    <ng-container *ngComponentOutlet="cmp.component; inputs: cmp.inputs">
    </ng-container>
    }
  `,
  styleUrl: './full-custom-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullCustomPageComponent implements OnInit {
  button: ComponentData = ButtonComponent.Make({
    content: 'new text',
    toolTip: 'abcd',
  });
  card: ComponentData = CardComponent.Make({
    title: 'title',
    content: 'this is the content',
  });
  components: ComponentData[] = [this.button, this.card];
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
    const newInputs: CardInputs = { content: value, title: value };
    if (this.card.inputs) this.card.inputs['inputs'] = newInputs;
  }
}
