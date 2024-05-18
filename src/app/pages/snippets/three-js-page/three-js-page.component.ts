import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThreeJsExampleComponent } from '../../../common/three-js/three-js-example.component';
import { ISourceCode } from '../../../models/i-source-code';
import { ShowCaseCodeComponent } from '../../../common/show-case-code/show-case-code.component';

@Component({
  selector: 'app-three-js-page',
  standalone: true,
  imports: [CommonModule, ThreeJsExampleComponent, ShowCaseCodeComponent],
  template: `<app-three-js-example></app-three-js-example>
    <app-show-case-code [sources]="sources"></app-show-case-code>`,
  styleUrl: './three-js-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreeJsPageComponent {
  sources: ISourceCode[] = [
    {
      name: 'Dependencies install',
      code: `npm install three --save

npm install @types/three --save-dev
`,
    },
    {
      name: 'common/three-js/three-js-example.component.ts',
    },
    {
      name: 'common/three-js/three-js.component.ts',
    },
    {
      name: 'common/three-js/three-js.component.scss',
    },
  ];
}
