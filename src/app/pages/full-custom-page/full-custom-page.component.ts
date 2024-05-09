import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Type,
} from '@angular/core';
import { CardComponent } from '../../common/card/card.component';
import { ButtonComponent } from '../../common/button/button.component';
import { ClickEventService } from '../../services/click-event.service';

interface CustomComponent {
  component: Type<any>;
  inputs?: Record<string, any>;
}

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
  card: CustomComponent = {
    component: CardComponent,
    inputs: { title: 'Title', content: 'This is the content of the card' },
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
  }
}
