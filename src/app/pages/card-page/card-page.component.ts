import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CardComponent } from '../../common/card/card.component';
import { HttpClient } from '@angular/common/http';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [CommonModule, CardComponent, Highlight],
  template: `<app-card
      [data]="{ title: 'Simple card', content: 'That displays text content' }"
    ></app-card>

    <pre><code [highlight]="code" language="typescript"></code></pre>
    <pre><code [highlight]="codeScss" language="scss"></code></pre>`,
  styleUrl: './card-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPageComponent implements OnInit {
  code: string = `...`;
  codeScss: string = '...';

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
          this.code = value;
          this._cd.markForCheck();
        },
      });

    this._httpClient
      .get('assets/raw_code/common/card/card.component.scss', {
        responseType: 'text',
      })
      .subscribe({
        next: (value) => {
          this.codeScss = value;
          this._cd.markForCheck();
        },
      });
  }
}
