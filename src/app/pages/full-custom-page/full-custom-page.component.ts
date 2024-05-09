import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  CardComponent,
  CustomCardComponent,
} from '../../common/card/card.component';
import {
  ButtonComponent,
  CustomButtonComponent,
} from '../../common/button/button.component';
import { ClickEventService } from '../../services/click-event.service';

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
  button: CustomButtonComponent = ButtonComponent.MakeComponentData({
    content: 'this is a btn',
  });
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
