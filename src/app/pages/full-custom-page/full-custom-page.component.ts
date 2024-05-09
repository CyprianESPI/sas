import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  CardComponent,
  CardComponentData,
} from '../../common/card/card.component';
import { ButtonComponent } from '../../common/button/button.component';
import { ClickEventService } from '../../services/click-event.service';
import { CustomComponent } from '../../models/custom-component';

@Component({
  selector: 'app-full-custom-page',
  standalone: true,
  imports: [CommonModule],
  template: `<p>full-custom-page works!</p>
    <ng-container *ngComponentOutlet="card.component; inputs: card.inputs">
    </ng-container>
    <ng-container *ngComponentOutlet="button.component; inputs: button.inputs">
    </ng-container>`,
  styleUrl: './full-custom-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullCustomPageComponent implements OnInit {
  card: CardComponentData = {
    component: CardComponent,
    inputs: {
      title: 'Title',
      content: 'This is the content of the card',
    },
  };

  button: CustomComponent = {
    component: ButtonComponent,
    inputs: { content: 'Click me!' },
  };

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
