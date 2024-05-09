import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CardComponent, CardInputs } from '../../common/card/card.component';
import { ButtonComponent } from '../../common/button/button.component';
import { ClickEventService } from '../../services/click-event.service';
import { ComponentData } from '../../models/component-data';

@Component({
  selector: 'app-full-custom-page',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <h2>Custom</h2>
    <ng-container *ngComponentOutlet="card.component; inputs: card.inputs">
    </ng-container>
    <ng-container *ngComponentOutlet="button.component; inputs: button.inputs">
    </ng-container>
    <h2>Hardcoded</h2>
    <app-button [inputs]="{ content: 'abc', toolTip: 'edf' }"></app-button>
    <h2>More stuff</h2>
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
