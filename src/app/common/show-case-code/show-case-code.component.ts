import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ISourceCode } from '../../models/i-source-code';
import { HighlightAuto } from 'ngx-highlightjs';
import { HttpClient } from '@angular/common/http';
import { UrlEndPipe } from '../../pipes/url-end.pipe';
import { MatIconComponent } from '../mat-icon/mat-icon.component';
import { ButtonFabComponent } from '../button-fab/button-fab.component';

@Component({
  selector: 'app-show-case-code',
  standalone: true,
  template: ` @for(source of sources; track source){
    <div>
      <span class="header-container">
        <span style="flex-grow: 1;" (click)="source.hidden = !source.hidden">
          <app-mat-icon
            style="vertical-align: middle;"
            [data]="{
              name: source.hidden ? 'expand_more' : 'expand_less',
            }"
          ></app-mat-icon>
          <span>{{ source.name | appUrlEnd }}</span>
        </span>

        <app-button-fab
          style="vertical-align: middle;"
          [data]="{ iconName: 'content_copy' }"
          (click)="copyToClipboard(source.code ?? '')"
        ></app-button-fab>
      </span>
      <pre
        [class]="source.hidden ? 'hidden' : ''"
      ><code [highlightAuto]="source.code ?? ''" [languages]="['bash','html','scss','typescript']"></code></pre>
    </div>
    }`,
  styleUrl: './show-case-code.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    HighlightAuto,
    UrlEndPipe,
    ButtonFabComponent,
    MatIconComponent,
  ],
})
export class ShowCaseCodeComponent implements OnInit {
  @Input()
  sources: ISourceCode[] = [];

  constructor(
    private _httpClient: HttpClient,
    private _cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Get code from fileName if no code is provided
    this.sources.forEach((source) => {
      if (source.code !== undefined) return;
      const filePath = `assets/raw_code/${source.name}`;
      this._httpClient
        .get(filePath, {
          responseType: 'text',
        })
        .subscribe({
          next: (value) => {
            //console.log(filePath, value);
            source.code = value;
            this._cd.markForCheck();
          },
          error(err) {
            console.error(err);
          },
        });
    });
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text);
  }
}
