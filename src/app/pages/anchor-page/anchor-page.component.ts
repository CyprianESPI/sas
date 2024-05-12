import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ISourceCode } from '../../models/i-source-code';
import { ShowCaseCodeComponent } from '../../common/show-case-code/show-case-code.component';
import { AnchorComponent } from '../../common/anchor/anchor.component';

@Component({
  selector: 'app-anchor-page',
  standalone: true,
  imports: [CommonModule, AnchorComponent, ShowCaseCodeComponent],
  template: `<app-anchor
      [data]="{ content: 'Go back home', path: '/home' }"
    ></app-anchor>
    <app-show-case-code [sources]="sources"></app-show-case-code>`,
  styleUrl: './anchor-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnchorPageComponent {
  sources: ISourceCode[] = [
    {
      name: 'html',
      code: `<app-anchor
      [data]="{ content: 'Go back home', path: '/home' }"
    ></app-anchor>`,
    },
    {
      name: 'common/anchor/anchor.component.ts',
    },
    {
      name: 'common/anchor/anchor.component.scss',
    },
  ];
}
