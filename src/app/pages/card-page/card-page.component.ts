import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CardComponent } from '../../common/card/card.component';
import { HttpClient } from '@angular/common/http';
import { HighlightAuto } from 'ngx-highlightjs';
import { ShowCaseComponent } from '../../common/show-case/show-case.component';
import { IComponentData } from '../../models/i-component';
import { ISourceCode } from '../../models/i-source-code';

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [CommonModule, CardComponent, HighlightAuto, ShowCaseComponent],
  template: `<app-show-case [cmp]="cmp" [sources]="sources"></app-show-case>`,
  styleUrl: './card-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPageComponent implements OnInit {
  cmp: IComponentData = {
    component: CardComponent,
    data: { title: 'Simple card', content: 'That displays text content' },
  };
  sources: ISourceCode[] = [
    {
      name: 'example.html',
      code: `<app-card [data]="{ title: 'Simple card',
      content: 'That displays text content' }">
      </app-card>`,
    },
    {
      name: 'common/card/card.component.ts',
    },
    {
      name: 'common/card/card.component.scss',
    },
  ];

  constructor(
    private _httpClient: HttpClient,
    private _cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._httpClient
      .get('assets/raw_code/common/card/card.component.ts', {
        responseType: 'text',
      })
      .subscribe({
        next: (value) => {
          //this.code = value;
          this._cd.markForCheck();
        },
      });

    this._httpClient
      .get('assets/raw_code/common/card/card.component.scss', {
        responseType: 'text',
      })
      .subscribe({
        next: (value) => {
          //this.codeScss = value;
          this._cd.markForCheck();
        },
      });
  }
}
