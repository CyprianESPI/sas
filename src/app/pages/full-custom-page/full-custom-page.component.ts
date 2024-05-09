import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  CardComponent,
  CustomCardComponent,
} from '../../common/card/card.component';
import {
  ButtonComponent,
  ButtonInputs,
} from '../../common/button/button.component';
import { ClickEventService } from '../../services/click-event.service';
import { CustomComponent } from '../../models/custom-component';

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
  `,
  styleUrl: './full-custom-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullCustomPageComponent implements OnInit {
  buttonInputs: ButtonInputs = { content: 'new text', toolTip: 'abc' };
  button: CustomComponent = {
    component: ButtonComponent,
    inputs: { inputs: this.buttonInputs },
  };
  card: CustomCardComponent = CardComponent.MakeComponentData({
    title: 'title',
    content: 'this is the content',
  });

  constructor(private _clickEventService: ClickEventService) {}

  ngOnInit(): void {
    this._clickEventService.clickEvent$.subscribe({
      next: (value) => {
        this.handleClickEvent(value);
      },
    });
  }

  handleClickEvent(value: any): void {
    console.log(`handleEvent(${value})`);
    this.card.inputs.content = value;
  }
}
