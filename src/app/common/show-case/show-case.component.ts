import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IComponentData } from '../../models/i-component';
import { ButtonComponent } from '../button/button.component';
import { ISourceCode } from '../../models/i-source-code';
import { HighlightAuto } from 'ngx-highlightjs';
import { SourceCodePipe } from '../../pipes/source-code.pipe';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-case',
  standalone: true,
  imports: [CommonModule, HighlightAuto, SourceCodePipe],
  template: `<ng-container
      *ngComponentOutlet="cmp.component; inputs: { data: cmp.data }"
    ></ng-container>
    @for(source of sources; track source){
    <h3>{{ source.name }}</h3>
    <pre><code [highlightAuto]="source.code ?? ''" ></code></pre>
    }`,
  styleUrl: './show-case.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCaseComponent implements OnInit {
  @Input()
  cmp: IComponentData = {
    component: ButtonComponent,
    data: {},
  };
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
            console.log(filePath, value);
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