import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IComponentData } from '../../../models/i-component';
import { ISourceCode } from '../../../models/i-source-code';
import { ToolbarComponent } from '../../../common/toolbar/toolbar.component';
import { ShowCaseComponent } from '../../../common/show-case/show-case.component';

@Component({
  selector: 'app-toolbar-page',
  standalone: true,
  imports: [CommonModule, ShowCaseComponent, ToolbarComponent],
  template: `<app-show-case [cmp]="cmp" [sources]="sources"></app-show-case>`,
  styleUrl: './toolbar-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarPageComponent {
  cmp: IComponentData = ToolbarComponent.Make({
    buttons: [{ callBack: () => {}, content: 'clickMe', toolTip: 'helpMe' }],
    subTitle: 'to the jungle',
    title: 'Welcome',
  });
  sources: ISourceCode[] = [
    {
      name: 'example.html',
      code: `<app-toolbar
      [data]="{
        buttons: [
          { callBack: () => {}, content: 'clickMe', helpMe: '' }
        ],
        subTitle: 'to the jungle',
        title: 'Welcome'
      }"
    ></app-toolbar>`,
    },
    {
      name: 'common/toolbar/toolbar.component.ts',
    },
    {
      name: 'common/toolbar/toolbar.component.scss',
    },
  ];
}
