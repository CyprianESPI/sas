import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IComponentData } from '../../models/i-component';
import { ButtonComponent } from '../button/button.component';
import { ISourceCode } from '../../models/i-source-code';
import { HighlightAuto } from 'ngx-highlightjs';
import { SourceCodePipe } from '../../pipes/source-code.pipe';

@Component({
  selector: 'app-show-case',
  standalone: true,
  imports: [CommonModule, HighlightAuto, SourceCodePipe],
  template: `<ng-container
      *ngComponentOutlet="cmp.component; inputs: { data: cmp.data }"
    ></ng-container>
    @for(source of sources; track source){
    <h3>{{ source.name }}</h3>
    <pre><code [highlightAuto]="source | appSourceCode" ></code></pre>
    }`,
  styleUrl: './show-case.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCaseComponent {
  @Input()
  cmp: IComponentData = {
    component: ButtonComponent,
    data: {},
  };
  @Input()
  sources: ISourceCode[] = [];
}
