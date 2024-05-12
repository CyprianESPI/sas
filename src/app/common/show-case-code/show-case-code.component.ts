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

@Component({
  selector: 'app-show-case-code',
  standalone: true,
  imports: [CommonModule, HighlightAuto],
  template: ` @for(source of sources; track source; let first=$first){
    <details [open]="first">
      <summary>{{ first ? 'html' : source.name }}</summary>
      <pre><code [highlightAuto]="source.code ?? ''" [languages]="['html','scss','typescript']"></code></pre>
    </details>
    }`,
  styleUrl: './show-case-code.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
}
